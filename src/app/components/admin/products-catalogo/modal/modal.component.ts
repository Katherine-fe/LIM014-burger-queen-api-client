import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  @Input() visibleProductsDelete: boolean = false;
  

  @Input() title: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  cerrarModalProduct(){
    this.close.emit(false);
  }
  
}
