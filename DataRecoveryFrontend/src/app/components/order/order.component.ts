import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Order} from '../../shared/models/order';
import {CustomNumberValidator} from '../../shared/validators/CustomNumberValidator';
import {TrackingService} from '../../shared/services/tracking.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public loggedIn = false;
  private order: Order;
  postalCode = new FormControl('', [CustomNumberValidator.numeric]);
  trackingId = new FormControl('');

  constructor(private trackingService: TrackingService) { }

  ngOnInit(): void {
  }

  submitPostalCode() {
    console.log(this.postalCode.value); //88433
    console.log(this.trackingId.value);
    this.trackingService.validateTrackingId(this.trackingId.value,parseInt(this.postalCode.value)).subscribe( order => {
      this.order = order[0];
      if(this.order.trackingId == this.trackingId.value && parseInt(this.postalCode.value) == this.order.customer.postalCode ){
        this.loggedIn = true
      }else{
        console.log('Falsche Tracking ID')
      }
    });
  }

  falseLogin(){
    // TODO: Show Toast
  }
}
