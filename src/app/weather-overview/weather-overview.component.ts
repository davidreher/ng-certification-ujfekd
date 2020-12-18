import { Component, OnInit } from '@angular/core';
import { WeatherLocationService } from './weather-location.service';

@Component({
  selector: 'app-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.css']
})
export class WeatherOverviewComponent implements OnInit {
  zipCodes: string[] = [];

  constructor(private weatherLocationService: WeatherLocationService) { }

  ngOnInit() {
    this.zipCodes = this.weatherLocationService.getLocations();
  }

}