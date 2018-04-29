import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TravelComponent } from './travel/travel.component';
import { FlightComponent } from './travel/flight/flight.component';
import { HotelComponent } from './travel/hotel/hotel.component';
import { CustomerComponent } from './customer/customer.component';
import { RottenTomatoesComponent } from './rotten-tomatoes/rotten-tomatoes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TravelComponent,
    FlightComponent,
    HotelComponent,
    CustomerComponent,
    RottenTomatoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthGuard,
    RottenTomatoesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
