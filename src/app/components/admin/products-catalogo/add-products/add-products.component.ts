import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  title = '';
  buttonAddUpdate = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  myModalProduct = false;

  mostrarModalProduct(){
    this.myModalProduct = true;
    this.title='Add Product'
    this.buttonAddUpdate= 'Add'
  }

  cerrarModalProduct(e: boolean){
    this.myModalProduct = e;
  }
}
