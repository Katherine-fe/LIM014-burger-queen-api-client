import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const link = "http://localhost:3000/auth";

    return this.http.post<UserInterface>(link,
      {
        "email": email,
        "password": password
      });
  }
  setToken(token: any): void {
    let tokenString = JSON.stringify(token);
    localStorage.setItem("accessToken", tokenString);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

}
