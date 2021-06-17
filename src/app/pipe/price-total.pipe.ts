import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../model/order-interface';

@Pipe({
  name: 'priceTotal'
})
export class PriceTotalPipe implements PipeTransform {

  transform(id: string, orders: Array<Order>): number {
    const item = orders.filter((obj) => obj._id == id);
    const total = item[0].products.reduce(
      (acc, obj) => acc + obj.product.price * obj.qty,
      0
    );
    return total;
  }

}
