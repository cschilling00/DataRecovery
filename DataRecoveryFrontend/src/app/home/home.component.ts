import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../shared/models/customer.model';
import {BackendService} from '../shared/services/backend.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public product: Product;
  public products$: Observable<Product[]>;
  public selected;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.products$ = this.backendService.getProducts();

  }

}
