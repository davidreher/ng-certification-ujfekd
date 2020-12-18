export type CurrentWeatherApiModel = {
  weather: { main: string }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
};

export type CurrentWeather = {
  currentConditions: string;
  icon: string;
  zipCode: string;
  city: string;
  temperatures: {
    current: number;
    max: number;
    min: number;
  };
};

export type ForecastApiModel = {};

export type Forecast = {};
