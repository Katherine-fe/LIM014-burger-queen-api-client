import { Product } from '../model/product-interface';
export interface Order {
  _id: string;
  userId: string;
  client: string;
  products: Array<itemOrder>;
  status: string;
  dateEntry: Date;
  dateProcessed: Date;
}

export interface itemOrder {
  qty: number;
  product: Product;
}
export interface prodOrder {
  qty: number;
  product: {
    _id: string;
  }
}