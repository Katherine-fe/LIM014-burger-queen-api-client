import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public objectOrderProduct!: object;

  setObjectOrderProduct(product: object) {
    this.objectOrderProduct = product;
  }

  getObjectOrderProduct() {
    return this.objectOrderProduct;  
  }

  constructor(public http: HttpClient) { }

  public link: string = environment.link + 'orders/';
  public buttonAddClickEventTrack = new Subject();
  private subjectSource = new Subject<void>();

  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 123ABC',
    }
  );

  get refresh$() {
    return this.subjectSource;
  }
  getListOrders(): Observable<any> {
    return this.http.get(`${this.link}`, {  headers: this.headers });
  }

  postOrder(order: object): Observable<any> {
    return this.http.post(this.link, (order), { headers: this.headers })
      .pipe(
        tap(()=> {
          this.refresh$.next();
        })
      )
  }

  
}
