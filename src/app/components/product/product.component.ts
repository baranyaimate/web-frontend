import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(response => this.products = response);
  }

  delete(id: number = 0): void {
    if (id == 0) {
      console.error('Invalid product id');
    }

    this._productService.delete(id);
    this.products = this.products.filter(product => product.id != id);
  }

}
