import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location-details.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-search-output',
  templateUrl: './search-output.component.html',
  styleUrls: ['./search-output.component.css']
})
export class SearchOutputComponent implements OnInit {

  response = [];
  url = '';
  cityName: string;

  constructor(private locationService: LocationService,
              private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.currentCityName.subscribe(name => {
      this.cityName = name;
      this.getData();
    });
  }

  getData(): void {
    this.url='https://api.foursquare.com/v2/venues/explore?near='
              + this.cityName
              + '&oauth_token=JQNDBKRKRFWPKJW3L0FHZZOS1FI5UF1UO41QWPGBRSF3VZH2&v=20180318';

    this.locationService.getLocationData(this.url).subscribe(data => {
      this.response = data.response.groups[0].items;
    });
  }
}
