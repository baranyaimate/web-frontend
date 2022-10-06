import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getOrders() {
    return this._http.get<any>(environment.apiUrl + 'order');
  }

  getOrder(orderId: number) {
    return this._http.get<any>(environment.apiUrl + 'order/' + orderId)
  }

  delete(orderId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<any>(environment.apiUrl + 'order/' + orderId, httpOptions)
      .subscribe();
  }

  save(order: Order): void {
    this._http
      .put<any>(environment.apiUrl + 'order/' + order.id, order)
      .subscribe();
  }

}
