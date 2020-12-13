import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Order} from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<any> {
    return this.http.get(this.backendUrl + 'orders');
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'orders/'}${id}`);
  }

  updateOrder(id: number, order: Order): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'orders/'}${id}`, order);
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(this.backendUrl + 'orders/', order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'orders/'}${id}`);
  }
}
