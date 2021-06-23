import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) { }
  canActivate() {

    try {
      const local: any = this.authService.getToken();
      const token: any = jwt_decode(local);
      if (!token.roles.admin) {
        return true;
      }
    } catch (error) {
      this.route.navigate(['login']);
    }
    return true;
  }

}
