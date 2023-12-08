import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';


//Module


//Pages
import { HomeComponent } from './home/home.component';

import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    HomeComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
  ]
})
export class PagesModule { }