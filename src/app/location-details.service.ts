import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(private http:HttpClient) {}

  getLocationData(url: string): Observable<any> {
    return this.http.get(url);
  }

}
