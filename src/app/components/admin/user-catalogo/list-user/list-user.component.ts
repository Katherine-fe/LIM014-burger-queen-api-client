import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { adminUser } from '../../../../model/user-interface'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {
  usersAdmin: adminUser[] = [];
  user!: Object;
  title = '';
  delateObj!: Object;
  myModalEdit = false;
  myModalDelete = false;
  subscriptionUsers: Subscription = new Subscription;

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.subscriptionUsers = this.users.refreshUser$.subscribe(() => {
      this.getUsers();
    });
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionUsers.unsubscribe();
    console.log("Observable cerrado");
  }

  getUsers() {
    this.users.getUser().subscribe(data => {
      this.usersAdmin = data;
    });
  }
  showEdit(userItem: Object) {
    this.title = "Update";
    this.user = userItem;
    this.myModalEdit = true;
  }
  showDelete(userItem: object) {
    console.log(userItem);
    this.delateObj = userItem;
    this.myModalDelete = true;
  }
  closeEdit(e: boolean) {
    this.myModalEdit = e;
    this.myModalDelete = e;
  }
  closeDelete(e: boolean) {
    this.myModalDelete = e;
  }
}
