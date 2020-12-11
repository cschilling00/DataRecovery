import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {CustomNumberValidator} from "../../shared/validators/CustomNumberValidator";
import {Customer} from "../../shared/models/customer";
import {Order} from "../../shared/models/order";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";
import {CustomerService} from "../../shared/services/customer.service";
import {OrderService} from "../../shared/services/order.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  private customer: Customer;
  private order: Order;
  public products: Product[];
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  product = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  tel = new FormControl('');


  constructor(private productService: ProductService, private customerService: CustomerService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  submit()






}