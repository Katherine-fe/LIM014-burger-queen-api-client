import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/model/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private autho: AuthService, private router: Router) { }

  public user: UserInterface = {
    email: '',
    password: ''
  };
  error: boolean = false;
  errorMessage: string = 'Please enter a valid email or password'
  ngOnInit(): void {}

  login() {
      this.autho.loginUser(this.user.email, this.user.password)
        .subscribe(data => {
          this.autho.setToken(data.token);
          const pokemon = this.autho.getToken();
          switch (pokemon) {
            case '"tokenAdmin"':
              this.router.navigate(['menuprincipal']);
              break;
            case '"tokenCocinero"':
              this.router.navigate(['mainkitchener']);
              break;
            case '"tokenMesero"':
              this.router.navigate(['mainWaiter']);
              break;
            default:
              console.log("No pasa nada");
          }
        }, error => {
          if (error.status === 400){
            this.error = true;
          }
          });
    }
  }

