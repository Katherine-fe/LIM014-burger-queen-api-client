import { Order, prodOrder } from '../model/order-interface';

export function changeStatus(order: Order , arrayProducts: Array<prodOrder>) {
        if (order.status == 'canceled') {
          order.status = 'delivering';
          console.log('delivering')
        } else if (order.status == 'pending') {
          order.status = 'canceled';
          console.log('canceled')
        }
        const orderEdit = {
          userId: order.userId,
          client: order.client,
          products: arrayProducts,
          status: order.status,
        };
        return orderEdit;
      }
export function arrayProd(orders : Array<Order>){
   const arrayProducts = orders.map((order) => {
       const products = {
          qty: order.products[0].qty,
          product: {
            _id: order.products[0].product._id,
          },
        };
        return products;
      });
    return arrayProducts;
    }