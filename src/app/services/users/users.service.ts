import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  private link: string = environment.link + 'users/';
  private token: any = this.auth.getToken();

  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token}`,
    })

  getUser(): Observable<any> {
    return this.http.get(this.link, { headers: this.headers })
  }
}
