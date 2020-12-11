import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get(this.backendUrl + 'products');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'products/'}${id}`);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'products/'}${id}`, product);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.backendUrl + 'products/', product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'products/'}${id}`);
  }
}
