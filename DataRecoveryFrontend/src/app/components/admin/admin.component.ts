import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  public EditContent: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.EditContent = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      text: new FormControl('')
    });
  }

}
