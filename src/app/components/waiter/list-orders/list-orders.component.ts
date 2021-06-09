import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  products = [];
  public objProd: any;
  constructor() { }

  ngOnInit(): void {
    this.listenAddProduct();
  }

  listenAddProduct() {
  /*     let exist = this.products.
        (item => item._id == this.objProd._id);
      if (!exist) {
        this.objProd.qty = 1;
      }
  
  } */

}
}