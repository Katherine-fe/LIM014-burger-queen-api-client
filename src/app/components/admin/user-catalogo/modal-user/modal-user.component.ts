import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  @Input() showUser: boolean = false;
  @Input() title: string = '';

  @Input() editUser: boolean = false;
  @Input() deleteUser: boolean = false;
  @Input() userI: any;

  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor(private userService: UsersService) { }
  addUser = new FormGroup({
    email: new FormControl('', Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  closeModalUser() {
    this.addUser.reset();
    this.close.emit(false);
  }
  saveUser() {
    if (this.title == "Add") {
      if (this.addUser.valid) {
        const objUser: object = {
          "email": this.addUser.value.email.toLowerCase(),
          "password": this.addUser.value.password,
          "roles": {
            "admin": this.addUser.value.rol == 'yes' ? true : false
          }
        }
        this.addUser.reset({ email: '', password: '', rol: '' });/* Linea temporal */
        this.userService.postUser(objUser).subscribe(() => {
          this.addUser.reset({ email: '', password: '', rol: '' });
        });
        this.closeModalUser(); /* Temporal esto debe estar dentro de subscribe */
        console.log(objUser);
      } else {
        alert("Complete all inputs and enter correct data");
      }
    } else {
      this.addUser.value.email = this.userI.email;
      this.closeModalUser()
      console.log(this.userI);
    }
  }
  deleteModalUser() {
    this.closeModalUser();
  }
}
