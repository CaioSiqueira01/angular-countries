import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url: string = "https://restcountries.com/v3.1/";
  
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${this.url}/all`);
  }
}
