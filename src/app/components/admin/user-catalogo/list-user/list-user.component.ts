import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { adminUser } from '../../../../model/user-interface'
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  usersAdmin: adminUser[] = [];
  constructor(private users: UsersService, private auth: AuthService) { }

  private token: any = this.auth.getToken();
  private tokenEncode: any = jwt_decode(this.token);
  ngOnInit(): void {
    this.getUsers();
  }
  myModalEdit = false;
  myModalDelete = false;

  getUsers() {
    if (this.tokenEncode.roles.admin) {
      this.users.getUser().subscribe(data => {
        this.usersAdmin = data.user;
      });
    } else {
      alert("No es administrador");
    }
  }
  mostrarModalEdit() {
    this.myModalEdit = true;
  }
  mostrarModalDelete() {
    this.myModalDelete = true;
  }
  cerrarModalEdit(e: boolean) {
    this.myModalEdit = e;
  }
  cerrarModalDelete(e: boolean) {
    this.myModalDelete = e;
  }
}
