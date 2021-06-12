import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from '../../model/user-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: boolean = false;
  public link: string = environment.link;

  constructor(private http: HttpClient) { }

  requestPost(email: string, password: string): Observable<any> {
    const link = "http://localhost:3000/auth";

    return this.http.post<UserInterface>(link,
      {
        "email": email,
        "password": password
      });
  }
  setToken(token: string): void {
    let tokenString = JSON.stringify(token);
    localStorage.setItem("accessToken", tokenString);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
  logout() {
    localStorage.removeItem("accessToken");
  }
  getUser(email: string, token: any) {
    return this.http.get(`${this.link}users/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    )
  };
};