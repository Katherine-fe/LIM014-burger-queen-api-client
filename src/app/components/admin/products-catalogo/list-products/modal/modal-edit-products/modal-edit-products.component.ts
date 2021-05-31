import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-edit-products',
  templateUrl: './modal-edit-products.component.html',
  styleUrls: ['./modal-edit-products.component.scss']
})
export class ModalEditProductsComponent implements OnInit {

  @Input() visibleEditProduct: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }
  closeModalEditProduct(){
    this.close.emit(false);
  }
}
