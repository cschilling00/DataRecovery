import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Admin} from '../../shared/models/admin';
import {LoginService} from '../../shared/services/login.service';
import {Order} from '../../shared/models/order';
import {OrderService} from '../../shared/services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  public loggedIn = false;
  private admin: Admin;
  private name: string;
  public orders: Order[];
  password = new FormControl('oro');
  username = new FormControl('Oro');
  public EditContent: FormGroup;

  constructor(private loginService: LoginService, private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    console.log(this.name);
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      console.log("Im Subscribe: ");
      console.log(this.orders);
    });
  }

  submit() {
    console.log(this.username.value);
    console.log(this.password.value);
    this.loginService.validateAdmin(this.username.value, this.password.value).subscribe(admin => {
      console.log(admin);
      this.admin = admin;
      if(this.admin.username == this.username.value && this.password.value == this.admin.password){
        this.loggedIn = true;
        console.log("Logged in: " +this.loggedIn);
      }

      if (this.loggedIn == false) {
        console.log('Validierung fehlgeschlagen');
      }
    });
  }

  editFAQ() {
    console.log("Edit FAQ");
    console.log()
  }

  editProducts() {
    console.log("Edit Products");
  }

  manageAdmins() {
    console.log("Manage Admins");
  }
}
