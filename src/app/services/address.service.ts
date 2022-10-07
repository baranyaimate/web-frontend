import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAddressesByUserId(userId: number): Observable<Address[]> {
    return this._http.get<Address[]>(environment.apiUrl + 'address/getAddressesByUserId/' + userId)
  }

  getAddress(addressId: number): Observable<Address> {
    return this._http.get<Address>(environment.apiUrl + 'address/' + addressId)
  }

  getAddresses(): Observable<Address[]> {
    return this._http.get<Address[]>(environment.apiUrl + 'address');
  }

  deleteAddress(addressId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<Address>(environment.apiUrl + 'address/' + addressId, httpOptions)
      .subscribe();
  }

  updateAddress(address: Address): void {
    this._http
      .put<Address>(environment.apiUrl + 'address/' + address.id, address)
      .subscribe();
  }

  saveAddress(address: Address): void {
    this._http
      .post<Address>(environment.apiUrl + 'address', address)
      .subscribe();
  }

}
