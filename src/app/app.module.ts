import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ZipFormComponent } from "./weather-overview/zip-form/zip-form.component";
import { WeatherLocationService } from "./weather-overview/weather-location.service";
import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { WeatherCardComponent } from "./weather-overview/weather-card/weather-card.component";
import { WeatherForecastComponent } from "./weather-overview/weather-forecast/weather-forecast.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { WeatherConditionService } from "./weather-overview/weather-condition.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ZipFormComponent,
    WeatherOverviewComponent,
    WeatherCardComponent,
    WeatherForecastComponent
  ],
  bootstrap: [AppComponent],
  providers: [WeatherLocationService, WeatherConditionService]
})
export class AppModule {}
