import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchOutputComponent } from './search-output/search-output.component';
import { LocationService } from './location-details.service';
import { SharedDataService } from './shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchOutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LocationService,
    SharedDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
