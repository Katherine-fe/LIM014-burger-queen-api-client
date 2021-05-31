import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myModalEditProduct = false;
  myModalDeleteProduct = false;

  mostrarModalEditProduct(){
    this.myModalEditProduct = true;
  }
  mostrarModalDeleteProduct(){
    this.myModalDeleteProduct = true;
  }
  cerrarModalEditProduct(e: boolean){
    this.myModalEditProduct = e;
  }
  cerrarModalDeleteProduct(e: boolean){
    this.myModalDeleteProduct = e;
  }

}
