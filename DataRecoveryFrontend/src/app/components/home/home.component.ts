import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../../shared/services/news.service";
import {News} from "../../shared/models/news";
import {Product} from "../../shared/models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService,private productService: ProductService) { }
  public innerWidth: any;
  public newsList: News[];
  public products: Product[];
  OrderForm: FormGroup;
  ngOnInit() {
    this.OrderForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      product : new FormControl(''),
      street : new FormControl(''),
      city : new FormControl(''),
      tel : new FormControl('')
    });
    this.innerWidth = window.innerWidth;
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });

    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
