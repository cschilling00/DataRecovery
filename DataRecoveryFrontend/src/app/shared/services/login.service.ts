import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }
  validateTrackingId(trackingId: string, postalCode: number): Observable<any>{
    return this.http.post(`${this.backendUrl + 'login/'}${trackingId}`,{
      'postalCode': postalCode
    });
  }

  validateAdmin(username: string, password: string): Observable<any>{
    return this.http.post(`${this.backendUrl + 'login/'}`,{
      'username': username,
      'password': password
    });
  }

}
