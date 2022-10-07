import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [];

  constructor(
    private _http: HttpClient,
  ) { }

  getOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(environment.apiUrl + 'order');
  }

  getOrder(orderId: number): Observable<Order> {
    return this._http.get<Order>(environment.apiUrl + 'order/' + orderId)
  }

  deleteOrder(orderId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<Order>(environment.apiUrl + 'order/' + orderId, httpOptions)
      .subscribe();
  }

  updateOrder(order: Order): void {
    this._http
      .put<Order>(environment.apiUrl + 'order/' + order.id, order)
      .subscribe();
  }

  saveOrder(order: Order): void {
    this._http
      .post<Order>(environment.apiUrl + 'order', order)
      .subscribe();
  }

}
