import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  title = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  myModalProduct = false;

  mostrarModalProduct(){
    this.myModalProduct = true;
    this.title='Add Product'
  }

  cerrarModalProduct(e: boolean){
    this.myModalProduct = e;
  }
}
