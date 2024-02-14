import { API_KEY } from "./api.js";

export const getWeatherUrl = (zip) => {
  return `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&cnt=40&appid=${API_KEY}`;
};

export const getGeoUrl = (zip) => {
  return `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${API_KEY}`;
};

export const dateFixer = (date) => {
  return new Date(date).toDateString();
};

export const tempConverter = (kelvin) => {
  let conversion = Math.round((kelvin - 273.15) * 1.8 + 32);
  return `${conversion}°F`;
};
