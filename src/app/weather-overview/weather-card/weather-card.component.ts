import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherConditionService } from "../weather-condition.service";
import { WeatherLocationService } from "../weather-location.service";
import { CurrentWeather } from "../weather.model";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent implements OnInit {
  @Input() zipCode: string;
  conditions$: Observable<CurrentWeather>;

  constructor(
    private readonly weatherConditionService: WeatherConditionService,
    private readonly weatherLocationService: WeatherLocationService
  ) {}

  ngOnInit() {
    this.conditions$ = this.weatherConditionService.getCurrentConditions(
      this.zipCode
    );
  }

  removeLocation() {
    this.weatherLocationService.removeLocation(this.zipCode);
  }
}
