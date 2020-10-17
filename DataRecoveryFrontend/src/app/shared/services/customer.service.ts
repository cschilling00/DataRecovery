import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private backendUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.http.get(this.backendUrl + '/');
  }
  getCustomerById(id: number): Observable<any>{
    return this.http.get(`${this.backendUrl + '/'}${id}`);
  }
  updateCustomer(id: number, customer: Customer): Observable<any>{
    return this.http.patch(`${this.backendUrl + '/'}${id}`, customer);
  }
  createCustomer(customer: Customer): Observable<any>{
    return this.http.post(this.backendUrl + '/', customer);
  }
  deleteCustomer(id: Customer): Observable<any>{
    return this.http.delete(`${this.backendUrl + '/'}${id}`);
  }
}
