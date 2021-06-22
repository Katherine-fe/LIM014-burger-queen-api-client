import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { adminUser } from '../../../../model/user-interface'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  usersAdmin: any[] = [];
  constructor(private users: UsersService) {
    /*   this.http.get('http://localhost:3000/products')
         .subscribe((resp : any) => {
           this.products = resp.products;
           console.log(resp.products)
         })
         */
  }

  ngOnInit(): void {
    this.getUsers();
  }
  myModalEdit = false;
  myModalDelete = false;

  getUsers() {
    this.users.getUser().subscribe(data => {
      this.usersAdmin = data.user;
    });
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
