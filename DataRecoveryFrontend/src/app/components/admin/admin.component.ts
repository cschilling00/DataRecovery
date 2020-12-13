import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Admin} from '../../shared/models/admin';
import {LoginService} from '../../shared/services/login.service';
import {Order} from '../../shared/models/order';
import {OrderService} from '../../shared/services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FaqEditComponent} from '../faq-edit/faq-edit.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderEditComponent} from '../order-edit/order-edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  public loggedIn = false;
  private admin: Admin;
  private name: string;
  password = new FormControl('oro');
  username = new FormControl('Oro');
  public EditContent: FormGroup;

  constructor(private loginService: LoginService,
              private modalService: NgbModal,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.username.value);
    console.log(this.password.value);
    this.loginService.validateAdmin(this.username.value, this.password.value).subscribe(admin => {
      console.log(admin);
      this.admin = admin;

      if(this.admin.username === this.username.value && this.password.value == this.admin.password){
        this.loggedIn = true;
        this.router.navigateByUrl('/manageOrders');
        console.log('Logged in: ' + this.loggedIn);
      }

      if (this.loggedIn === false) {
        console.log('Validierung fehlgeschlagen');
      }
    });
  }


}
