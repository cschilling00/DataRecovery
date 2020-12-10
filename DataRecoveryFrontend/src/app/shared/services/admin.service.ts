import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Admin} from '../models/admin';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAdmins(): Observable<any> {
    return this.http.get(this.backendUrl + 'admin');
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl + 'admin/'}${id}`);
  }

  updateAdmin(id: number, admin: Admin): Observable<any> {
    return this.http.patch(`${this.backendUrl + 'admin/'}${id}`, admin);
  }

  createAdmin(admin: Admin): Observable<any> {
    return this.http.post(this.backendUrl + 'admin/', admin);
  }

  deleteAdmin(id: Admin): Observable<any> {
    return this.http.delete(`${this.backendUrl + 'admin/'}${id}`);
  }
}
