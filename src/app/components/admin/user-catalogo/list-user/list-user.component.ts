import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  products: any [] = [];
  constructor( private http: HttpClient) { 
   this.http.get('http://localhost:3000/products')
      .subscribe((resp : any) => {
        this.products = resp.products;
        console.log(resp.products)
      })
  }

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
