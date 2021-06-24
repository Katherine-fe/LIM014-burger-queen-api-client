import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/model/user-interface';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  @Input() showUser: boolean = false;
  @Input() title: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor() { }
  addUser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  closeModalUser() {
    this.close.emit(false);
  }
  saveUser() {
    if (this.addUser.errors == null) {
      alert("Please complete all inputs");
    } else {
      console.log("Holi boli")
    }
  }
}
