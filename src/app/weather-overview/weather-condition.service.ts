import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_KEY } from "../../environment/environment";

@Injectable()
export class WeatherConditionService {
  constructor(private http: HttpClient) {}

  getConditions(zipCode: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`
    );
  }
}
