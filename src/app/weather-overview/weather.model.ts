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

export type ForecastApiModel = {
  city: { name: string };
  list: {
    dt: number;
    weather: { main: string }[];
    temp: {
      min: number;
      max: number;
    };
  }[];
};

export type Forecast = {
  city: string;
  list: {
    date: number;
    conditions: string;
    temperatures: {
      min: number;
      max: number;
    };
    icon: string;
  }[];
};
