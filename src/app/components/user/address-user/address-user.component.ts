import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-address-user',
  templateUrl: './address-user.component.html',
  styleUrls: ['./address-user.component.scss']
})
export class AddressUserComponent implements OnInit {

  addresses: Address[] = [];
  userId: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _addressService: AddressService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadAddresses();
    this._userService.getUser(this.userId).subscribe(response => this.user = response);
  }

  loadAddresses(): void {
    this._addressService.getAddressesByUserId(this.userId).subscribe(response => this.addresses = response);
  }

  deleteAddress(addressId: number = 0): void {
    if (addressId == 0) {
      console.error('Invalid address id');
    }

    this._addressService.deleteAddress(addressId);
    this.addresses = this.addresses.filter(address => address.id != addressId);
  }

}
