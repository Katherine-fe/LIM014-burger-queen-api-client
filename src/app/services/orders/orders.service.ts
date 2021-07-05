import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public objectOrderProduct!: object;
  public token: any = this.auth.getToken();
  public link: string = environment.link + 'orders/';

  public buttonAddClickEventTrack = new Subject();
  private subjectSource = new Subject<void>();

  constructor(public http: HttpClient, public auth: AuthService) { }

  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token.replaceAll('"', '')}`,
    })

  get refresh$() {
    return this.subjectSource;
  }

  setObjectOrderProduct(product: object) {
    this.objectOrderProduct = product;
  }

  getObjectOrderProduct() {
    return this.objectOrderProduct;
  }

  getListOrders(): Observable<any> {
    return this.http.get(`${this.link}?page=1&limit=100`, { headers: this.headers });
  }

  postOrder(order: object): Observable<any> {
    return this.http.post(this.link, (order), { headers: this.headers })
      .pipe(
        tap(() => {
          this.refresh$.next();
        })
      )
  }

  updateOrder(order: any, uid: string) {
    return this.http.put(this.link + uid, (order), { headers: this.headers })
      .pipe(
        tap(() => {
          this.refresh$.next();
        })
      )
  }
}
