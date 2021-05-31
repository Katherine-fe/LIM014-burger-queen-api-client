import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myModalEdit = false;
  myModalDelete = false;

  mostrarModalEdit(){
    this.myModalEdit = true;
  }
  mostrarModalDelete(){
    this.myModalDelete = true;
  }
  cerrarModalEdit(e: boolean){
    this.myModalEdit = e;
  }
  cerrarModalDelete(e: boolean){
    this.myModalDelete = e;
  }
}
