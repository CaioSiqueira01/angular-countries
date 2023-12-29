import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countries: any = [];
  originalCountries: any = [];

  constructor(private service: CountriesService) {}

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void { this.getAllCountries(); }

  getAllCountries() {
    this.service.getCountries().subscribe(res => {
      this.countries = res; 
      this.originalCountries = [...this.countries];
      this.countries.sort((a: any, b: any) => {
        return a.name.common.localeCompare(b.name.common);
      });
    });
  }

  public search(value: string) {
    this.countries = this.originalCountries.filter((country: any) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });

    this.emmitSearch.emit(value);
  }

  public filterByRegion(event: any) {
    const selectedRegion = event?.currentTarget?.value || 'All';
    if (selectedRegion === 'All') {
      this.countries = [...this.originalCountries];
    } else {
      this.countries = this.originalCountries
      .filter((country: any) => country.region.toLowerCase() === selectedRegion.toLowerCase())
      .sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
    }
  }
}
