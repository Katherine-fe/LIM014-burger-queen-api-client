import { Order, prodOrder } from '../model/order-interface';

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
          products: order.products,
          status: order.status,
        };
        return orderEdit;
      }
