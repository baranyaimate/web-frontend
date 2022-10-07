import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  product: Product = {};

  constructor(
    private router: Router,
    private _productService: ProductService
  ) { }

  saveProduct(): void {
    this._productService.saveProduct(this.product);
    this.router.navigate(['/product'])
  }

}
