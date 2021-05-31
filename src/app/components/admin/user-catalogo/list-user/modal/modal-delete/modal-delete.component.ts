import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {
  
  @Input() visibleDelete: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  closeModalDelete(){
    this.close.emit(false);
  }
}
