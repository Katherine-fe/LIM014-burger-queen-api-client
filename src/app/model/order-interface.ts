import { Product } from '../model/product-interface';

export interface Order  {
  _id: string;
  userId: string;
  client: string;
  products: Array<itemOrder>;
  status: string;
  dateEntry: Date;
}

export interface itemOrder{
  qty: number;
  product: Product;
}