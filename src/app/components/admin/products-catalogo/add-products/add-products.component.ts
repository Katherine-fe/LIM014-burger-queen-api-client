import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() visibleProductsAdd: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  myModalProduct3 = false;

  mostrarModalProduct(){
    this.myModalProduct3 = true;

  }

  cerrarModalProduct(e: boolean){
    this.myModalProduct3 = e;
  }
}
