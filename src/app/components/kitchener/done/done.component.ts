import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order-interface';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  orderDone: Order[] = [];
  statusCanceled: string = 'canceled';
  constructor(private get: OrdersService) { }

  ngOnInit(): void {
    this.orders();
  }

  orders() {
    this.get.getListOrders().subscribe(data => {
      this.orderDone = data;
    });
  }
}
