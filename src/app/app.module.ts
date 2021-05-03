import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HeaderComponent } from './Components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './Components/settings/settings.component';
import { AddressComponent } from './Components/address/address.component';
import { FeedService } from './Services/feed.service';
import { LoginService } from './Services/login.service';
import { RegisterService } from './Services/register.service';
import { OrderService } from './Services/order.service';
import { SettingsService } from './Services/settings.service';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    SettingsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FeedService,
    LoginService,
    RegisterService,
    OrderService,
    SettingsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
