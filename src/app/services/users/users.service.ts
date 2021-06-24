import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  public token = localStorage.getItem("accessToken");
  private link: string = environment.link + 'users/';

  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token}`,
    })

  getUser(): Observable<any> {
    return this.http.get(this.link, { headers: this.headers })
  }
}
