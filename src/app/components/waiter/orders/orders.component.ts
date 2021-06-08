import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private http: ApiService) { }

  ngOnInit(): void {
    /* this.getProducts(); */
  }

  /*  getProducts() {
     this.http.getProducts().subscribe((rest: any) => {
       console.log(rest.products);
     });
   } */
}
