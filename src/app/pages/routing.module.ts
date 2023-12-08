import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:name',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }