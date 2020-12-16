import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NewsService} from '../../shared/services/news.service';
import {News} from '../../shared/models/news';
import {Product} from '../../shared/models/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {Customer} from '../../shared/models/customer';
import {CustomerService} from '../../shared/services/customer.service';
import {OrderService} from '../../shared/services/order.service';
import {Order} from '../../shared/models/order';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService,
              private productService: ProductService,
              private customerService: CustomerService,
              private orderService: OrderService) { }
  public innerWidth: any;
  public newsList: News[];
  public products: Product[];
  public product: Product;
  public customer: Customer;
  OrderForm: FormGroup;
  ngOnInit() {
    this.OrderForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      product : new FormControl(''),
      street : new FormControl(''),
      houseNumber : new FormControl(''),
      city : new FormControl(''),
      postalCode : new FormControl(''),
      tel : new FormControl('')
    });
    this.innerWidth = document.documentElement.clientWidth;
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });

    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = document.documentElement.clientWidth;
  }

  submitOrder() {
    console.log(this.OrderForm.getRawValue());
    this.customer = (this.OrderForm.value as Customer);
    console.log(this.customer);
    const productId = this.OrderForm.get('product').value;
    console.log(productId);
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
      console.log(product);
    });
    this.customerService.createCustomer(this.customer).subscribe( customer => {
      if (customer as Customer){
        const order: Order = new Order();
        order.customerId = Number(customer.id);
        order.productId = Number(this.product.id);
        console.log(order);
        this.orderService.createOrder(order).subscribe(order => console.log(order));
      }
    });
  }
}
