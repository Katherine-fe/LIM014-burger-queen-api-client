import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  @Input() visibleEdit: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }
  closeModalEdit(){
    this.close.emit(false);
  }
}
