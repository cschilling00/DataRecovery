import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Admin} from '../../shared/models/admin';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  public loggedIn = false;
  private admin: Admin;
  password = new FormControl('oro');
  username = new FormControl('Oro');
  public EditContent: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.username.value);
    console.log(this.password.value);
    this.loginService.validateAdmin(this.username.value, this.password.value).subscribe(admin => {
      this.admin = admin;
      if(this.admin.username == this.username.value && this.password.value == this.admin.password){
        this.loggedIn = true;
      }
    });
    if (this.loggedIn == false) {
      console.log('Validierung fehlgeschlagen');
    }
  }
}
