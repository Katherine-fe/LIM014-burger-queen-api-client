import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/model/user-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  public user: UserInterface = {
    email: '',
    password: ''
  };
  error: boolean = false;
  errorMessage: string = '';
  ngOnInit(): void { }

  login() {
    if (this.user.email == '' || this.user.password == '') {
      this.error = true;
      this.errorMessage = "inputs vacios";
    } else {
      this.error = true;
      this.errorMessage = "Wait a moment..."
      this.auth.requestPost(this.user.email, this.user.password)
        .subscribe(data => {
          this.auth.setToken(data.token);
          const token: any = jwt_decode(data.token);
          if (token.roles.admin) {
            console.log(token.roles.admin);
            this.router.navigate(['menuprincipal']);
          } else {
            this.router.navigate(['staff']);
          }
        }, error => {
          if (error.status === 0) {
            this.error = true;
            this.errorMessage = "Connection refused";
          } else if (error.status === 400) {
            this.error = true;
            this.errorMessage = "Please, enter a valid email or password";
          }
        });
    }
  }
}