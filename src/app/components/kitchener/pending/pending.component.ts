import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  constructor(private get: ApiService) { }

  ngOnInit(): void {
    this.orders();
  }

  orders() {
    this.get.getOrders().subscribe(data => {
      data.order.forEach((element: any) => {
        console.log(element.client);
      });
    });
  }
}
