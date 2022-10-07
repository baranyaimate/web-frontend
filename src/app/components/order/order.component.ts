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
    this.loadOrders();
  }

  deleteOrder(orderId: number = 0): void {
    if (orderId == 0) {
      console.error('Invalid order id');
    }

    this._orderService.deleteOrder(orderId);
    this.orders = this.orders.filter(order => order.id != orderId);
  }

  loadOrders() {
    this._orderService.getOrders().subscribe(response => this.orders = response);
  }

}
