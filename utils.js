export const getWeatherUrl = (zip) => {
  return `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&cnt=7&appid=${API_KEY}`;
};

export const getGeoUrl = (zip) => {
  return `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${API_KEY}`;
};
