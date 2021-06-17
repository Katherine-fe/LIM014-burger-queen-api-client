import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  title = '';
 
  constructor() { }

  ngOnInit(): void {
  }

  myModalProduct = false;
  myModalProduct2 = false;


  mostrarModalProduct(){
    this.myModalProduct = true;
    this.title ='Edit Product';
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
