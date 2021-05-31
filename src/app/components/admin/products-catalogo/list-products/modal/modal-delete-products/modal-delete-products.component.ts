import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal-delete-products',
  templateUrl: './modal-delete-products.component.html',
  styleUrls: ['./modal-delete-products.component.scss']
})
export class ModalDeleteProductsComponent implements OnInit {

 
  @Input() visibleDeleteProduct: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  closeModalDeleteProduct(){
    this.close.emit(false);
  }

}
