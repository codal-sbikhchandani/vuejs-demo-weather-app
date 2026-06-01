export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentType<string>;
  current: CurrentType<number>;
  city: string;
};

export type CurrentType<T> = {
  time: string;
  interval: T;
  temperature_2m: T;
  is_day: T;
  cloud_cover: T;
  rain: T;
};
