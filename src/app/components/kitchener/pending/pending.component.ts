import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Order } from '../../../model/order-interface';
import { Product } from '../../../model/product-interface';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  orderList: Order[] = [];
  constructor(private get: ApiService) { }

  ngOnInit(): void {
    this.orders();
  }

  orders() {
    this.get.getOrders().subscribe(data => {
      this.orderList = data.order;
    });
  }
  prueba(id: string) {
    return id;
  }
  /* return this.producto.reduce((acc, obj) => acc + obj.products[0].product.price * obj.products[0].qty,
    0
  ); */
}
