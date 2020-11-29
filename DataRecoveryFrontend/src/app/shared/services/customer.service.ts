import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<any> {
    return this.http.get(this.backendUrl + 'customers');
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'customers/'}${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'customers/'}${id}`, customer);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.backendUrl + 'customers/', customer);
  }

  deleteCustomer(id: Customer): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'customers/'}${id}`);
  }
}
