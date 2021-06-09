import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from '../../../model/product-interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];
  constructor(private http: ProductService) { }
  viewB:boolean = false;

  ngOnInit(): void {
    this.http.refresh$.subscribe(() => {
      this.getProductsFilter('desayuno')
    })
    this.getProductsFilter('desayuno')
}

 getProducts() {
    this.http.getListProducts().subscribe((data) => {
    /* console.log(rest.products);  */
    this.products = data.products;
    });
  }

  getProductsFilter(typeF : any) {
    this.http.getListProducts().subscribe((data) => {
    this.products= data.products.filter((products: { type: string;}) => products.type === typeF)});
    if(typeF === 'desayuno'){
      this.viewB=false; 
    }
  }
  viewButton(){
  this.viewB=true;
  }

}
