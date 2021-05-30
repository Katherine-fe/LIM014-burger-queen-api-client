import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  @Input() visibleAdd: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  closeModalAdd(){
    this.close.emit(false);
  }


}
