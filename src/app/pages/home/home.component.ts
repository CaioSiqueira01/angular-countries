import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countries: any = [];
  constructor(private service: CountriesService) {}

  ngOnInit(): void { this.getAllCountries(); }

  getAllCountries() {
    this.service.getCountries().subscribe(res => {
      this.countries = res; 
      this.countries.sort((a: any, b: any) => {
        return a.name.common.localeCompare(b.name.common);
      });
    });
  }
}
