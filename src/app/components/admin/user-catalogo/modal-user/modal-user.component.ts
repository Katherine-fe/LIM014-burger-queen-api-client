import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  expReg: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  @Input() showUser: boolean = false;

  @Input() editUser: boolean = false;
  @Input() deleteUser: boolean = false;
  @Input() userSelect!: any;
  @Input() userI: any;

  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor(private userService: UsersService) { }
  addUser = new FormGroup({
    email: new FormControl('', Validators.pattern(this.expReg)),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  closeModalUser() {
    this.close.emit(false);
  }
  saveUser() {
    if (this.addUser.valid) {
      const objUser: object = {
        "email": this.addUser.value.email.toLowerCase(),
        "password": this.addUser.value.password,
        "roles": {
          "admin": this.addUser.value.rol == 'yes' ? true : false
        }
      }
      this.userService.postUser(objUser).subscribe(() => {
        this.addUser.reset({ email: '', password: '', rol: '' });
        this.closeModalUser();
      });
    } else {
      alert("Complete all inputs and enter correct data");
    }
  }

  deleteModalUser() {
    this.userService.deleteUser(this.userSelect._id).subscribe(() => {
      this.closeModalUser();
    });
  }
  updateUser(email: string, rol: string, pass: string) {
    if (!this.expReg.test(email) || email == '' || rol == '' || pass == '') {
      alert("Complete all inputs and enter correct data");
    } else {
      const userUpdate = {
        email: email,
        password: pass,
        roles: {
          admin: rol == 'true' ? true : false
        }
      }
      this.userService.updateUser(userUpdate, this.userSelect._id).subscribe(() => {
        this.closeModalUser();
      });
    }
  }
}
