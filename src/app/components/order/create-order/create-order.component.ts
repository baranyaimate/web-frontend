import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  order: Order = {};
  allUsers: User[] = [];
  allProducts: Product[] = [];

  constructor(
    private router: Router,
    private _orderService: OrderService,
    private _userService: UserService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(response => this.allUsers = response);
    this._productService.getProducts().subscribe(response => this.allProducts = response);
    this.addProduct();
  }

  addProduct(): void {
    if (!this.order.products) {
      this.order.products = [];
    }
    this.order.products.push(new Object);
  }

  removeProduct(productIndex: number = 0): void {
    this.order.products?.splice(productIndex, 1);
  }

  saveOrder(): void {
    this._orderService.saveOrder(this.order);
    this.router.navigate(['/order'])
  }

}
