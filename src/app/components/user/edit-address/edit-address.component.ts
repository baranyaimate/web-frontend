import { HttpClient } from '@angular/common/http';
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
  submitted = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _addressService: AddressService
  ) { }

  ngOnInit(): void {
    this._addressService.getAddress(this.id).subscribe(response => this.address = response);
  }

  save() {
    this.submitted = true;
    this.address.userId = this.address.user?.id;
    this._addressService.save(this.address);
    this.router.navigate(['/user'])
  }

}
