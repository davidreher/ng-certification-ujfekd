import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { WeatherConditionService } from "../weather-condition.service";
import { Forecast } from "../weather.model";

@Component({
  selector: "app-weather-forecast",
  templateUrl: "./weather-forecast.component.html",
  styleUrls: ["./weather-forecast.component.css"]
})
export class WeatherForecastComponent implements OnInit {
  forecast$: Observable<Forecast>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly weatherConditionService: WeatherConditionService
  ) {}

  ngOnInit() {
    this.forecast$ = this.activatedRoute.params.pipe(
      switchMap(routeParams =>
        this.weatherConditionService.getForecast(routeParams.zipCode)
      )
    );
  }

  navigateToOverview() {
    this.router.navigate([""]);
  }
}
