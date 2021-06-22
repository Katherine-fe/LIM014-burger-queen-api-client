import { Component, OnInit } from '@angular/core';
import { Order } from '../../../model/order-interface';
import * as dayjs from 'dayjs';
import { OrdersService } from 'src/app/services/orders/orders.service';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  orderList: Order[] = [];
  filterStatus: Order[] = [];
  total!: number;
  statusPending: string = '';
  //suscription: Subscription = new Subscription;
  constructor(private get: OrdersService) { }


  ngOnInit(): void {
    this.orders();
    /* this.suscription = this.getObservable.refresh$.subscribe(() => {
      this.orders();
    }); */
  }

  orders() {
    /* const date1 = dayjs('2021-06-16 12:00:00');
    const date2 = dayjs();
    const result = date2.diff(date1, 'm');
    console.log(Math.trunc(result / 60), result % 60); */
    this.get.getListOrders().subscribe(data => {
      this.orderList = data.order;
    });
  }
  pending(orders: any) {
    this.filterStatus = orders.filter((date: any) => date.status == 'pending');
    this.filterStatus.forEach((elm) => {
      let cadena = elm.dateEntry.toString();
      const esto = cadena.replace('-', '').replace(':', '')
      console.log(esto);
    });
    //Primero por los servicios y luego mockear
    //ng module 
  }
}
