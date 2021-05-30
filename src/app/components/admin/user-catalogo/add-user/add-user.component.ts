import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() visibleAdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  myModalAdd = false;

  mostrarModalAdd(){
    this.myModalAdd = true;
  }

  cerrarModalAdd(e: boolean){
    this.myModalAdd = e;
  }
}
