import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { AddressUserComponent } from './components/user/address-user/address-user.component';
import { EditAddressComponent } from './components/user/edit-address/edit-address.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { CreateAddressComponent } from './components/user/create-address/create-address.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    EditUserComponent,
    AddressUserComponent,
    EditAddressComponent,
    EditProductComponent,
    EditOrderComponent,
    CreateProductComponent,
    CreateUserComponent,
    CreateOrderComponent,
    CreateAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
