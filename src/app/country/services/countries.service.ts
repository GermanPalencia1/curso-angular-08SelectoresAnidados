import { Injectable } from '@angular/core';
import { Region, SmallCoutry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private _regions: Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europa, Region.Oceania];

  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getCoutriesByRegion(region: Region): SmallCoutry[] {

    return [];

  }

}
