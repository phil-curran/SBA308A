const apiKey = "ed3a126ff6d2bf3265efc688d85505cb";

const getWeatherUrl = (zip) => {
  return `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&cnt=7&appid=${apiKey}`;
};

const getGeoUrl = (zip) => {
  return `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`;
};

async function getWeatherData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData.list);
}

const form = document.getElementById("form");
const { zipCode } = form;

const handleFormSubmission = (e) => {
  e.preventDefault();
  let url = getWeatherUrl(zipCode.value);
  getWeatherData(url);
};

form.addEventListener("submit", handleFormSubmission);
