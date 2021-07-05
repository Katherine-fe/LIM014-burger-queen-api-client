import { Order } from '../model/order-interface';
import * as dayjs from 'dayjs';

export function changeStatus(order: Order) {
  if (order.status == 'canceled') {
    order.status = 'delivered';
    console.log('delivering')
  } else if (order.status == 'pending') {
    order.status = 'canceled';
    console.log('canceled')
  }
  const orderEdit = {
    userId: order.userId,
    client: order.client,
    dateEntry: order.dateEntry,
    dateProcessed: dayjs(),
    products: order.products,
    status: order.status,
  };
  return orderEdit;
}
