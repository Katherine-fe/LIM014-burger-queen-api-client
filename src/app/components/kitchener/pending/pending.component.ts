import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Order } from '../../../model/order-interface';
import * as dayjs from 'dayjs';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  orderList: Order[] = [];
  total!: number;
  //suscription: Subscription = new Subscription;
  constructor(private get: ApiService) { }


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
    this.get.getOrders().subscribe(data => {
      this.orderList = data.order;
      this.pending(this.orderList);
    });
  }
  pending(orders: any) {
    const filterStatus = orders.filter((date: any) => date.status == 'pending');
    // filterStatus.sort((a,b) => );
    console.log(filterStatus);
  }
  totalBill(id: string) {
    const item = this.orderList.filter((obj) => obj._id == id)
    this.total = item[0].products.reduce(
      (acc, obj) => acc + obj.product.price * obj.qty,
      0
    );
    return this.total;
  }
}
