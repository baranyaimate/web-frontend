import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(
    private _http: HttpClient,
  ) { }

  getProduct(productId: number) {
    return this._http.get<any>(environment.apiUrl + 'product/' + productId)
  }

  getProducts() {
    return this._http.get<any>(environment.apiUrl + 'product');
  }

  delete(productId: number) {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<any>(environment.apiUrl + 'product/' + productId, httpOptions)
      .subscribe();
  }

  save(product: Product): void {
    this._http
      .put<any>(environment.apiUrl + 'product/' + product.id, product)
      .subscribe();
  }
}
