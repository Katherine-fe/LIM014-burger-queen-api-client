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
  viewB: boolean = false;
  public productOrder!: object;
  productsSuscription: Subscription = new Subscription;
  
  constructor(private http: ProductService, private order$: OrdersService) {}

  ngOnInit(): void {
    this.productsSuscription = this.http.refresh$.subscribe(() => {
      this.getProductsFilter('desayuno');
      
    });
    this.getProductsFilter('desayuno');
  }
  getProducts() {
    this.http.getListProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
  getProductsFilter(typeF: any) {
    this.http.getListProducts().subscribe((data) => {
      this.products = data.products.filter(
        (products: { type: string }) => products.type === typeF
      );
    });
    if (typeF === 'desayuno') {
      this.viewB = false;
    }
  }
  viewButton() {
    this.viewB = true;
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
