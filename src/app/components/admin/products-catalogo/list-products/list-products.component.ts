import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  title = '';
  buttonAddUpdate = '';
  products: Product[] = [];
  productsSuscription: Subscription = new Subscription;
 
  constructor(private prod: ProductService) { }

  ngOnInit(): void {
    this.productsSuscription = this.prod.refresh$.subscribe(() => {
      this.getProducts();
    });
    this.getProducts();
  }

  myModalProduct = false;
  myModalProduct2 = false;

  getProducts() {
    this.prod.getListProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
  mostrarModalProduct(){
    this.myModalProduct = true;
    this.title ='Edit Product';
    this.buttonAddUpdate= 'Update'
  }
  mostrarModalProductDelete(){
    this.myModalProduct2 = true;
    this.title ='Delete Product';
  }
  cerrarModalProduct(e: boolean){
    this.myModalProduct = e;
    this.myModalProduct2 =e;
  }

}
