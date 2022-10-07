import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  address: Address;
  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses(): void {
    this._addressService.getAddress(this.id).subscribe(response => this.address = response);
  }

  saveAddress(): void {
    this.address.userId = this.address.user?.id;
    this._addressService.save(this.address);
    this.router.navigate(['/user'])
  }

}
