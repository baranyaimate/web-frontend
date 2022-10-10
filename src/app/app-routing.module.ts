import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { OrderComponent } from './components/order/order.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ProductComponent } from './components/product/product.component';
import { AddressUserComponent } from './components/user/address-user/address-user.component';
import { CreateAddressComponent } from './components/user/create-address/create-address.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EditAddressComponent } from './components/user/edit-address/edit-address.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/:id/edit', component: EditUserComponent },
  { path: 'user/:id/address', component: AddressUserComponent },

  { path: 'product', component: ProductComponent },
  { path: 'product/create', component: CreateProductComponent },
  { path: 'product/:id/edit', component: EditProductComponent },

  { path: 'order', component: OrderComponent },
  { path: 'order/create', component: CreateOrderComponent },
  { path: 'order/:id/edit', component: EditOrderComponent },

  { path: 'address/:id/edit', component: EditAddressComponent },
  { path: 'address/:id/create', component: CreateAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
