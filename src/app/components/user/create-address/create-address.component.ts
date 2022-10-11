import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Country } from 'src/app/models/country';
import { AddressService } from 'src/app/services/address.service';
import { countries } from 'src/app/stores/country-data-store';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent {

  countries: Country[] = countries;
  address: Address = {};
  userId: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _addressService: AddressService
  ) { }

  saveAddress(): void {
    this.address.userId = this.userId;
    this._addressService.saveAddress(this.address);
    this.router.navigate(['/user/' + this.userId + '/address'])
  }

}
