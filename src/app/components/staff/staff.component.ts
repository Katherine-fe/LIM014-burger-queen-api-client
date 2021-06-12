import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  routerWaiter() {
    this.route.navigate(["mainWaiter"]);
  }
  routerkitchener() {
    this.route.navigate(["mainkitchener"]);
  }
  logOut() {
    this.route.navigate(["login"]);
    this.auth.logout();
  }
}
