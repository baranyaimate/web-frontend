import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order: Order;
  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');

  allUsers: User[] = [];
  allProducts: Product[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _orderService: OrderService,
    private _userService: UserService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._orderService.getOrder(this.id).subscribe(response => {
      this.order = response;
      this.order.userId = this.order.user?.id;
      this.order.productIds = [];
      this.order.products?.forEach(prod => {
        this.order.productIds?.push(prod.id ?? 0);
      });
    });
    this._userService.getUsers().subscribe(response => this.allUsers = response);
    this._productService.getProducts().subscribe(response => this.allProducts = response);
  }

  save() {
    this._orderService.save(this.order);
    this.router.navigate(['/order'])
  }

  addProductInput() {
    this.order.products?.push(new Product);
  }

}
