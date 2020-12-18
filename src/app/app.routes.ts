import { Routes } from "@angular/router";
import { WeatherForecastComponent } from "./weather-overview/weather-forecast/weather-forecast.component";
import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";

export const ROUTES: Routes = [
  { path: "", component: WeatherOverviewComponent },
  { path: "forecast/:zipCode", component: WeatherForecastComponent }
];
