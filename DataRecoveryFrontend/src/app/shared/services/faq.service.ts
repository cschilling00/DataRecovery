import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Faq} from '../models/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getFaqs(): Observable<any> {
    return this.http.get(this.backendUrl + 'faq');
  }

  getFaqById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'faq/'}${id}`);
  }

  updateFaq(id: number, faq: Faq): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'faq/'}${id}`, faq);
  }

  createFaq(faq: Faq): Observable<any> {
    return this.http.post(this.backendUrl + 'faq/', faq);
  }

  deleteFaq(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'faq/'}${id}`);
  }
}

