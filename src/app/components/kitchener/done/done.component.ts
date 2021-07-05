import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/order-interface';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit, OnDestroy {
  orderDone: Order[] = [];
  subscriptionDone: Subscription = new Subscription;

  constructor(private get: OrdersService) { }

  ngOnInit(): void {
    this.subscriptionDone = this.get.refresh$.subscribe(() => {
      this.orders();
    });
    this.orders();
  }

  ngOnDestroy(): void {
    this.subscriptionDone.unsubscribe();
  }

  orders() {
    this.get.getListOrders().subscribe(data => {
      this.orderDone = data;
    });
  }
}
