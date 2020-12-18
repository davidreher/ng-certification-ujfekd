import { Component, Input, OnInit } from "@angular/core";
import { WeatherConditionService } from "../weather-condition.service";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent implements OnInit {
  @Input() zipCode: string;
  conditions: any;

  constructor(private weatherConditionService: WeatherConditionService) {}

  ngOnInit() {
    this.conditions = this.weatherConditionService.getConditions(this.zipCode);
  }
}
