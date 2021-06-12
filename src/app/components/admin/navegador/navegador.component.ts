import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  constructor(private log: AuthService) { }

  ngOnInit(): void { }

  logOut() {
    this.log.logout();
  }
}
