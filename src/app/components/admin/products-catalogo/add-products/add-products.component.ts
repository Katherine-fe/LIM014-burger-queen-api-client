import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() visibleAddProducts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  myModalAddProducts = false;

  mostrarModalAddProducts(){
    this.myModalAddProducts = true;
  }

  cerrarModalAddProducts(e: boolean){
    this.myModalAddProducts = e;
  }
}
