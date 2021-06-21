import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private subjectSource = new Subject<void>();
  public link: string = environment.link + 'orders/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer 123ABC",
  });

  get refresh$(){
    return this.subjectSource
  }
  getOrders(): Observable<any> {
    return this.http.get(this.link, { headers: this.headers });
  }

 
}
