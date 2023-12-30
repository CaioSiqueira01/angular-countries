// countries.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }

  getCountryDetailsByName(name: string | null): Observable<any> {
    return this.getCountries().pipe(
      map((countries: any[]) => countries.find((country: any) => country.name.common === name))
    );
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get<any>(`${this.url}/alpha/${code}`);
  }
}
