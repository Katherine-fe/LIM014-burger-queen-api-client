import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../../model/order-interface';
import * as dayjs from 'dayjs';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { changeStatus } from 'src/app/utilities/changeStatus';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit, OnDestroy {
  orderList: Order[] = [];
  filterStatus: Order[] = [];
  total!: number;
  subscriptionOrders: Subscription = new Subscription();

  constructor(private get: OrdersService) { }

  ngOnInit(): void {
    this.orders();
    this.subscriptionOrders = this.get.refresh$.subscribe(() => {
      this.orders();
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOrders.unsubscribe();
    console.log("Observable cerrado");
  }

  orders() {
    /* const date1 = dayjs('2021-06-16 12:00:00');
    const date2 = dayjs();
    const result = date2.diff(date1, 'm');
    console.log(Math.trunc(result / 60), result % 60); */
    this.get.getListOrders().subscribe(data => {
      this.orderList = data;
    });
  }
  onChangeStatus(order: Order): void {
    const editOrder = changeStatus(order);
    this.get.updateOrder(editOrder, order._id).subscribe(() => {
      console.log(editOrder);
    });

  }
}
