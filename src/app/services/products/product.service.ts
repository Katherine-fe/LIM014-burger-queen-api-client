import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable, throwError, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  public link: string = environment.link + 'products/';
  private subjectSource = new Subject<void>();
  public countdown$ = this.subjectSource.asObservable();
  
  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 123ABC',
    })
    
/* averiguar */    
get refresh$(){
  return this.subjectSource
}

getListProducts(): Observable<any> {
  return this.http.get(this.link, { headers: this.headers });
}



}
