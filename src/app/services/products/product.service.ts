import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient,  public auth: AuthService) { }
  public link: string = environment.link + 'products/';
  private subjectSource = new Subject<void>();
  public countdown$ = this.subjectSource.asObservable();
  public token : any = this.auth.getToken();
  
  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token.replaceAll('"', '')}`,
    })

  get refresh$(){
    return this.subjectSource
  }

  getListProducts(): Observable<any> {
    return this.http.get(this.link, { headers: this.headers });
  }
  postProduct(product: object): Observable<any> {
    return this.http.post(this.link, product, {headers: this.headers})
      .pipe(
        tap(() => {
          this.refresh$.next()
        })
      )
  }
  updateProduct(body: any, id: string) {
    return this.http.put(this.link + id, body, {headers: this.headers})
      .pipe(
          tap(() => {
          this.refresh$.next()
        })
      )
  }
  deleteProduct(product: any) {
    return this.http.delete(this.link + product._id, { headers: this.headers })
      .pipe(
        tap(() => {
          this.refresh$.next()
        })
      )
  }
}
