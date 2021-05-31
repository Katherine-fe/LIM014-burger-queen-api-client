import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-add-products',
  templateUrl: './modal-add-products.component.html',
  styleUrls: ['./modal-add-products.component.scss']
})
export class ModalAddProductsComponent implements OnInit {

  @Input() visibleAddProducts: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  closeModalAddProducts(){
    this.close.emit(false);
  }
}
