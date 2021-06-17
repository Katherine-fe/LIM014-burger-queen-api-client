import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../../services/orders/orders.service';
import { itemOrder } from '../../../model/order-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth/auth.service';
import * as dayjs from 'dayjs';

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
  public arrayProducts: any;
  public products: any;
  confirmation: boolean = false;
  public orderTotal: any;
  orderSuscription: Subscription = new Subscription();
  orderSendSuscription: Subscription = new Subscription();
  date = new Date();
  public accessToken: any;
  fecha = this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
  hora = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();

  constructor(private orders$: OrdersService, private auth: AuthService) { }

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
    }
    this.totalBill();
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
  createOrderFood() {
    this.accessToken = this.auth.getToken();
    const token: any = jwt_decode(this.accessToken);
    this.arrayProducts = this.orders.map((order) => {
      this.products = {
        qty: order.qty,
        product: {
          _id: order.product._id,
          name: order.product.name,
          price: order.product.price,
          image: order.product.image,
          type: order.product.type,
          dataEntry: order.product.dateEntry,
        }
      }
      return this.products;
    });
    this.orderTotal = {
      userId: token._id,
      client: this.form.value.client,
      products: this.arrayProducts,
      status: 'pending',
      dateEntry: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    console.log(this.orderTotal);
    return this.orderTotal;
  }

  sendOrder() {
    if (this.form.valid) {
      this.orderSendSuscription = this.orders$
        .postOrder(this.createOrderFood())
        .subscribe(() => {
          this.form.reset();
          this.confirmation = false;
          this.cleanList();
        });
    } else {
      this.confirmation = true;
    }
  }
  ngOnDestroy(): void {
    this.orderSuscription.unsubscribe();
    if (this.orderSendSuscription) {
      this.orderSendSuscription.unsubscribe();
    }
  }

}
