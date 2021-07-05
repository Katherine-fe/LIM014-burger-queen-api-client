import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../model/user-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: boolean = false;
  public link: string = environment.link + 'auth/';

  constructor(private http: HttpClient) { }

  requestPost(email: string, password: string): Observable<any> {

    return this.http.post<UserInterface>(this.link,
      {
        "email": email,
        "password": password
      });
  }
  setToken(token: string): void {
    let tokenString = token;
    localStorage.setItem('token', tokenString);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
  }
};
