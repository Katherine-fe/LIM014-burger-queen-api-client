import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { UserInterface } from '../../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: boolean = false;
  isLoggedIn = false;

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

  authorization(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(() => this.isLoggedIn = true));
  };

}
