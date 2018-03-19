import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  inputCityName: string;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.currentCityName.subscribe(name => this.inputCityName = name);
  }

  callOutput(cityName): void {
    if(!cityName) {
      cityName = 'NYC';
    }

    this.sharedDataService.changeCityName(cityName);
  }
}
