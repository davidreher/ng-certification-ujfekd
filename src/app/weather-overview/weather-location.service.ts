import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

const ZIP_STORAGE_KEY = "zip";

@Injectable()
export class WeatherLocationService {
  private zipCodes: string[] = [];
  private window: Window;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.window = document.defaultView;
    this.restoreLocations();
  }

  getLocations(): string[] {
    return this.zipCodes;
  }

  addLocation(zipCode: string): void {
    this.zipCodes.push(zipCode);
    this.window.localStorage.setItem(
      ZIP_STORAGE_KEY,
      JSON.stringify(this.zipCodes)
    );
  }

  removeLocation(zipCode: string): void {
    const index = this.zipCodes.indexOf(zipCode);
    if (index >= 0) {
      this.zipCodes.splice(index, 1);
    }
  }

  private restoreLocations(): void {
    this.zipCodes = JSON.parse(
      this.window.localStorage.getItem(ZIP_STORAGE_KEY)
    );
  }
}
