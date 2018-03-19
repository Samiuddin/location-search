import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedDataService {

  private cityNameSource = new BehaviorSubject<string>("NYC");
  currentCityName = this.cityNameSource.asObservable();

  constructor() {}

  changeCityName(newCityName: string) {
    this.cityNameSource.next(newCityName);
  }
}
