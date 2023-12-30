// country.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryDetails: any;

  constructor(private route: ActivatedRoute, private service: CountriesService) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('name');

    this.service.getCountryDetailsByName(countryName).subscribe(
      (res) => {
        this.countryDetails = res;
      }
    );
  }

  getCurrenciesString() {
    if (this.countryDetails && this.countryDetails.currencies) {
      const currencyNames = Object.keys(this.countryDetails.currencies).map(key => this.countryDetails.currencies[key].name);
      return currencyNames.join(', ');
    }
    return '';
  }

  getLanguagesString() {
    if (this.countryDetails && this.countryDetails.languages) {
      const languageNames = Object.keys(this.countryDetails.languages).map(key => this.countryDetails.languages[key]);
      return languageNames.join(', ');
    }
    return '';
  }
}
