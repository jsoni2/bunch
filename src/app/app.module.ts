import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './dashboard/chart/chart.component';
import { TravelComponent } from './travel/travel.component';
import { FlightComponent } from './travel/flight/flight.component';
import { HotelComponent } from './travel/hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChartComponent,
    TravelComponent,
    FlightComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
