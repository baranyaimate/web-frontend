import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    public _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this._orderService.getOrders().subscribe(response => this.orders = response);
  }

  delete(id: number = 0): void {
    if (id == 0) {
      console.error('Invalid order id');
    }

    this._orderService.delete(id);
    this.orders = this.orders.filter(order => order.id != id);
  }

}
