import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BackendService} from '../../shared/services/backend.service';
import {Order} from '../../shared/models/order';
import {CustomNumberValidator} from '../../shared/validators/CustomNumberValidator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public loggedIn = false;
  private orders: Order[];
  postalCode = new FormControl('', [CustomNumberValidator.numeric]);
  trackingId = new FormControl('');

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  submitPostalCode() {
    console.log(this.postalCode.value); //88433
    console.log(this.trackingId.value); //KN6v3FSXmQ7BLrJqFyqGuTUfaSDrqey6E8hkBUxQqvSNfKDmz1WG4qHQPPh6PfoB
    const postnr = this.postalCode.value.toNumber;
    console.log(typeof postnr);
    for (let order of this.orders){
      console.log(typeof postnr);
      if (order.customer.postalCode){
        console.log(order.customer.postalCode.toString());
        if (order.trackingId == this.trackingId.value && order.customer.postalCode == this.postalCode.value) {
          this.loggedIn = true;
          console.log(this.loggedIn);
        }
      }
    }


  }
}
