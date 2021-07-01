import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Order } from '../../../model/order-interface';
import { Subscription } from 'rxjs';
import { changeStatus} from '../../../utilities/changeStatus';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  orders: Order[] = [];
  total!: number;
  public token: any;
  public arrayProducts: any;
  public products: any;
  public orderEdit: any;
  orderUpdateSuscription: Subscription = new Subscription();
  showMoveButton: boolean = false;
  statusOrder!: string;

  constructor(private order: OrdersService) { }

  ngOnInit(): void {
    this.order.refresh$.subscribe(() => {
      this.getOrders();

    });
    this.getOrders();
  }
  getOrders() {
    this.order.getListOrders().subscribe((data) => {
      this.orders = data;
/*    this.orders = data.filter( (item : Order) => item.products.length > 0 ) */
      console.log(data)
    });
  }
  getOrderFilter(type: string) {
    switch (type) {
      case 'canceled':
        this.statusOrder = type;
        break;
      default:
        this.statusOrder = type
        break;
    }
  }

  onChangeStatus(order: Order) {
    const orderEdit = changeStatus(order);
    this.orderUpdateSuscription = this.order
      .updateOrder(orderEdit, order._id)
      .subscribe();
  }


  ngOnDestroy(): void {
    this.orderUpdateSuscription
      ? this.orderUpdateSuscription.unsubscribe()
      : null;
  }
}
