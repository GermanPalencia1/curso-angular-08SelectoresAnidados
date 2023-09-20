import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Region, SmallCoutry } from '../interfaces/country.interface';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europa, Region.Oceania];

  constructor(
    private http: HttpClient,
  ) {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getCoutriesByRegion(region: Region): Observable<SmallCoutry[]> {

    if(!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<SmallCoutry[]>(url)
    .pipe(
      tap(response => console.log({response}))
    );

  }

}
