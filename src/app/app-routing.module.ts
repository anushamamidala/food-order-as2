import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './Components/settings/settings.component'
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddressComponent } from './Components/address/address.component';
import { CartItemsComponent } from './Components/cart-items/cart-items.component';
import { TrackOrderComponent } from './Components/track-order/track-order.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'settings/address', component: AddressComponent },
  { path: 'cart', component: CartItemsComponent},
  { path: 'track-order', component: TrackOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
