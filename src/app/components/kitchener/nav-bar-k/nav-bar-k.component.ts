import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-k',
  templateUrl: './nav-bar-k.component.html',
  styleUrls: ['./nav-bar-k.component.scss']
})
export class NavBarKComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.route.navigate(["staff"]);
  }
}
