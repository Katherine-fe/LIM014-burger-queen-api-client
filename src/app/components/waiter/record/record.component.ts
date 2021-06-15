import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Order } from '../../../model/order-interface';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  orders: Order[] = [];
  total!: number;

  constructor(private order: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
   
  }
  getOrders() {
    this.order.getListOrders().subscribe((data) => {
      this.orders = data.order;
     
    });
  }
  totalBill(id: string) {
    const item = this.orders.filter((obj) => obj._id == id)
    this.total = item[0].products.reduce(
      (acc, obj) => acc + obj.product.price * obj.qty,
      0
    );
    return this.total;
  }

}
