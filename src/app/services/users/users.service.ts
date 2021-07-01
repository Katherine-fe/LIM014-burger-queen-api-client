import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient, public auth: AuthService) { }
  public token : any = this.auth.getToken();
  private link: string = environment.link + 'users/';

  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token.replaceAll('"', '')}`,
    })


  getUser(): Observable<any> {
    return this.http.get(this.link, { headers: this.headers })
  }
}
