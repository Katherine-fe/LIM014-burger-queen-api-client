import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../../services/orders/orders.service';
import { itemOrder } from '../../../model/order-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss'],
})
export class ListOrdersComponent implements OnInit {
  orders: itemOrder[] = [];
  total!: number;
  public objProd: any;
  form!: FormGroup;
  confirmation: boolean = false;
  orderSuscription: Subscription = new Subscription();
  
  constructor(private orders$: OrdersService) {}

  ngOnInit(): void {
    this.listenAddProduct();
    this.buildForm();
  }
  listenAddProduct() {
    this.orderSuscription = this.orders$.buttonAddClickEventTrack.subscribe(
      () => {
        this.objProd = this.orders$.getObjectOrderProduct();
        let exist = this.orders.some(
          (item) => item.product.name === this.objProd.product.name
        );
        if (!exist) {
          this.orders.push(this.objProd);
          this.totalBill();
        }
      }
    );
  }
  plus(id: string) {
    /*  const item = this.products.filter(obj => obj.product._id == id) let plus = item[0].qty; plus+=1; item [0].qty = plus; */
    this.orders.filter((obj) => obj.product._id == id)[0].qty += 1;
    this.totalBill();
  }
  minus(id: string) {
    const item = this.orders.filter((obj) => obj.product._id == id);
    let minus = item[0].qty;
    if (minus > 1) {
      this.orders.filter((obj) => obj.product._id == id)[0].qty -= 1;
      this.totalBill();
    }
  }
  cleanList() {
    this.total = 0;
    this.orders = [];
  }
  trash(id: string) {
    const index = this.orders.findIndex((item) => item.product._id == id);
    this.orders.splice(index, 1);
    this.totalBill();
  }
  totalBill() {
    this.total = this.orders.reduce(
      (acc, obj) => acc + obj.product.price * obj.qty,
      0
    );
  }
  private buildForm() {
    this.form = new FormGroup({
      client: new FormControl('', [Validators.required]),
    });
  }
  getClient() {
    return this.form.get('client');
  }
  sendOrder() {
    if (this.form.valid) {
      this.form.reset();
      this.confirmation = false;
    } else {
      this.confirmation = true;
    }
  }
}
