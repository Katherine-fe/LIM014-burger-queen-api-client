import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnDestroy {
  objProd = Object;
  products: Product[] = [];
  myModalProduct = false;
  myModalProduct2 = false;
  productsSuscription: Subscription = new Subscription;

  constructor(private prod: ProductService) { }

  ngOnInit(): void {
    this.productsSuscription = this.prod.refresh$.subscribe(() => {
      this.getProducts();
    });
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSuscription.unsubscribe();
    console.log("Observable cerrado");
  }


  getProducts() {
    this.prod.getListProducts().subscribe((data) => {
      this.products = data;
    });
  }
  mostrarModalProduct(product: any) {
    this.myModalProduct = true;
    this.objProd = product;
  }
  mostrarModalProductDelete(product: any) {
    this.myModalProduct2 = true;
    this.objProd = product;

  }
  cerrarModalProduct(e: boolean) {
    this.myModalProduct = e;
    this.myModalProduct2 = e;
  }
  string(date: Date) {
    return date.toString().substring(0, 10);
  }
}