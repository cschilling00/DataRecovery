import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }
  validateTrackingId(trackingId: string, postalCode: number): Observable<any>{
    return this.http.post(`${this.backendUrl + 'tracking/'}${trackingId}`,{
      'postalCode': postalCode
    });
  }

}
