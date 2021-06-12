import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Subject } from 'rxjs';


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

  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer 123ABC',
    }
  );



  
}
