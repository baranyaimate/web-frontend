import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product;
  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');
  submitted = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._productService.getProduct(this.id).subscribe(response => this.product = response);
  }

  save() {
    this.submitted = true;
    this._productService.save(this.product);
    this.router.navigate(['/product'])
  }

}
