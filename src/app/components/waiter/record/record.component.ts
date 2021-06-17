import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Order } from '../../../model/order-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  orders: Order[] = [];
  total!: number;
  public accessToken: any;
  public arrayProducts: any;
  public products: any;
  public orderEdit: any;
  orderUpdateSuscription: Subscription = new Subscription();
  showMoveButton: boolean = true;

  constructor(private order: OrdersService) { }

  ngOnInit(): void {
    this.order.refresh$.subscribe(() => {
      this.getOrderFilter('pending');
    });
    this.getOrders();
  }
  getOrders() {
    this.order.getListOrders().subscribe((data) => {
      this.orders = data.order;
    });
  }
  getOrderFilter(statusF: any) {
    this.order.getListOrders().subscribe((data) => {
      this.orders = data.order.filter(
        (orders: { status: string }) => orders.status === statusF
      );
    });
  }
  /*   showHideButtons(){
    this.orders[0].status === 'pending';
    }
 */

  changeStatus(order: Order) {
    this.arrayProducts = this.orders.map((order) => {
      this.products = {
        qty: order.products[0].qty,
        product: {
          _id: order.products[0].product._id,
          name: order.products[0].product.name,
          price: order.products[0].product.price,
          image: order.products[0].product.image,
          type: order.products[0].product.type,
          dataEntry: order.products[0].product.dateEntry,
        },
      };
      return this.products;
    });
    if (order.status == 'canceled') {
      order.status = 'delivering';
      console.log('delivering')
    } else if (order.status == 'pending') {
      order.status = 'canceled';
      console.log('canceled')
    }
    this.orderEdit = {
      userId: order.userId,
      client: order.client,
      products: this.arrayProducts,
      status: order.status,
    };
    this.orderUpdateSuscription = this.order
      .updateOrder(this.orderEdit, order._id)
      .subscribe();
  }

  /* totalBill(id: string) {

  } */
  ngOnDestroy(): void {
    this.orderUpdateSuscription
      ? this.orderUpdateSuscription.unsubscribe()
      : null;
  }
}
