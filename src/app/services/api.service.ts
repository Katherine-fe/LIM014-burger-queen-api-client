import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private token: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    // Authorization: this.token.loginUser(),
  });
  /* getProducts() {
    const link = 'http://localhost:3000/products';
    return this.http.get(link, { headers: this.headers });
  }
  getProductId(id: string) {
    const link = `http://localhost:3000/products/${id}`;
    return this.http.get(link);
  } */
}
