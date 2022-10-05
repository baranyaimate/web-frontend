import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { AddressUserComponent } from './components/user/address-user/address-user.component';
import { EditAddressComponent } from './components/user/edit-address/edit-address.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/:id/edit', component: EditUserComponent },
  { path: 'user/:id/address', component: AddressUserComponent },
  { path: 'address/:id/edit', component: EditAddressComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }