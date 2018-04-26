import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { TravelComponent } from './travel/travel.component';
import { FlightComponent } from './travel/flight/flight.component';
import { HotelComponent } from './travel/hotel/hotel.component';
import { RottenTomatoesComponent } from './rotten-tomatoes/rotten-tomatoes.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'dashboard',
    component: RottenTomatoesComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
    children: [
      {
        path:'flights',
        component: FlightComponent,
      },
      {
        path: 'hotels',
        component: HotelComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
