import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',

  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `<div class="results">
    <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation"
    >
    </app-housing-location>
  </div> `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
