import { Component, OnInit } from "@angular/core";
import { WeatherLocationService } from "../weather-location.service";

@Component({
  selector: "app-zip-form",
  templateUrl: "./zip-form.component.html",
  styleUrls: ["./zip-form.component.css"]
})
export class ZipFormComponent implements OnInit {
  zip: string;

  constructor(
    private readonly weatherLocationService: WeatherLocationService
  ) {}

  addZipCode() {
    if (this.zip) {
      this.weatherLocationService.addLocation(this.zip);
      this.zip = "";
    }
  }

  ngOnInit() {}
}
