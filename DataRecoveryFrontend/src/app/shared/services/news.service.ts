import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<any> {
    return this.http.get(this.backendUrl + 'news');
  }

  getNewsById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'news/'}${id}`);
  }

  updateNews(id: number, news: News): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'news/'}${id}`, news);
  }

  createNews(news: News): Observable<any> {
    return this.http.post(this.backendUrl + 'news/', news);
  }

  deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'news/'}${id}`);
  }
}

