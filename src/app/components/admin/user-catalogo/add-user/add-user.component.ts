import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  modalUser: boolean = false;
  //@Input() showUser: boolean = false;
  title = '';
  myModalAdd = false;
  constructor() { }

  ngOnInit(): void {
  }


  showModalUser() {
    this.modalUser = true;
    this.title = 'Add user Fio';
  }

  closeModalUser(e: boolean) {
    this.modalUser = e;
  }
}
