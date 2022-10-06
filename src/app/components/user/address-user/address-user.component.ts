import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-user',
  templateUrl: './address-user.component.html',
  styleUrls: ['./address-user.component.scss']
})
export class AddressUserComponent implements OnInit {

  addresses: Address[] = [];
  userId: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');

  constructor(
    private activatedRoute: ActivatedRoute,
    private _addressService: AddressService
  ) { }

  ngOnInit(): void {
    this._addressService.getAddressesByUserId(this.userId).subscribe(response => this.addresses = response);
  }

  delete(addressId: number = 0) {
    if (addressId == 0) {
      console.error('Invalid address id');
    }

    this._addressService.delete(addressId);
    this.addresses = this.addresses.filter(address => address.id != addressId);
  }

}
