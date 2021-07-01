import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from '../../../model/product-interface';
import { OrdersService } from '../../../services/orders/orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  products: Product[] = [];
  
  public productOrder!: object;
  productsSuscription: Subscription = new Subscription;
  filterProd: string = 'desayuno'
  show!: string;
  
  constructor(private http: ProductService, private order$: OrdersService) {}

  ngOnInit(): void {
    this.productsSuscription = this.http.refresh$.subscribe(() => {
      this.getProducts();
    });
    this.filterType('desayuno');
    this.getProducts();
  }
  getProducts() {
    this.http.getListProducts().subscribe((data) => {
      this.products = data;
    });
  }
  filterType(type: string) {
    switch (type) {
      case 'desayuno':
        this.show = '';
        this.filterProd = type
        break;
      case 'menú':
        this.show = "menú"
        this.filterProd = 'menú';
        break;
      default:
        this.show = "menú";
        this.filterProd = type
        break;
    }
  }
  buttonAdd(product: any) {
    this.productOrder = { qty: 1, product };
    this.sendObjProd(this.productOrder);
    this.order$.buttonAddClickEventTrack.next();
  }
  sendObjProd(product: object) {
    this.order$.setObjectOrderProduct(product);
  }
  ngOnDestroy(): void {
    this.productsSuscription.unsubscribe();
  }
}
