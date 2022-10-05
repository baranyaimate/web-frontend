import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addresses: Address[] = [];

  constructor(
    private _http: HttpClient,
  ) { }

  getAddressesByUserId(userId: number) {
    return this._http.get<any>(environment.apiUrl + 'address/getAddressesByUserId/' + userId)
  }

  getAddress(addressId: number) {
    return this._http.get<any>(environment.apiUrl + 'address/' + addressId)
  }

  getAddresses() {
    return this._http.get<any>(environment.apiUrl + 'address');
  }

  delete(addressId: number) {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<any>(environment.apiUrl + 'address/' + addressId, httpOptions)
      .subscribe();
  }

  save(address: Address): void {
    this._http
      .put<any>(environment.apiUrl + 'address/' + address.id, address)
      .subscribe();
  }
}
