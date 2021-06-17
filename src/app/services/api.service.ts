import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private token: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer 123ABC",
  });

  getOrders(): Observable<any> {
    const link = 'http://localhost:3000/orders';
    return this.http.get(link, { headers: this.headers });
  }
}
