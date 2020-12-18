import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-weather-forecast",
  templateUrl: "./weather-forecast.component.html",
  styleUrls: ["./weather-forecast.component.css"]
})
export class WeatherForecastComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  navigateToOverview() {
    this.router.navigate([""]);
  }
}
