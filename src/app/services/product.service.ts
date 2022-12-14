import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getProduct(productId: number): Observable<Product> {
    return this._http.get<Product>(environment.apiUrl + 'product/' + productId)
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(environment.apiUrl + 'product');
  }

  deleteProduct(productId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<Product>(environment.apiUrl + 'product/' + productId, httpOptions)
      .subscribe();
  }

  updateProduct(product: Product): void {
    this._http
      .put<Product>(environment.apiUrl + 'product/' + product.id, product)
      .subscribe();
  }

  saveProduct(product: Product): void {
    this._http
      .post<Product>(environment.apiUrl + 'product', product)
      .subscribe();
  }

}
