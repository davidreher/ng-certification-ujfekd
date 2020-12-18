import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_KEY } from "../../environment/environment";
import {
  CurrentWeather,
  CurrentWeatherApiModel,
  Forecast,
  ForecastApiModel
} from "./weather.model";

const mapConditionToIcon = (condition: string): string => {
  switch (condition) {
    case "Clear":
      return "sun.png";
    case "Clouds":
      return "clouds.png";
    case "Snow":
      return "snow.png";
    case "Rain":
      return "rain.png";
    default:
      return "clouds.png";
  }
};

@Injectable()
export class WeatherConditionService {
  constructor(private http: HttpClient) {}

  getCurrentConditions(zipCode: string): Observable<CurrentWeather> {
    return this.http
      .get<CurrentWeatherApiModel>(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=imperial`
      )
      .pipe(
        map(res => ({
          zipCode,
          city: res.name,
          currentConditions: res.weather[0].main,
          temperatures: {
            current: res.main.temp,
            max: res.main.temp_max,
            min: res.main.temp_min
          },
          icon: mapConditionToIcon(res.weather[0].main)
        }))
      );
  }

  getForecast(zipCode: string): Observable<Forecast> {
    return this.http
      .get<ForecastApiModel>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipCode},us&appid=${API_KEY}&units=imperial&cnt=5`
      )
      .pipe(
        map(res => ({
          city: res.city.name,
          list: res.list.map(entry => ({
            date: entry.dt * 1000,
            temperatures: {
              min: entry.temp.min,
              max: entry.temp.max
            },
            conditions: entry.weather[0].main,
            icon: mapConditionToIcon(entry.weather[0].main)
          }))
        }))
      );
  }
}
