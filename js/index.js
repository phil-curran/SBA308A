import { getWeatherUrl, getGeoUrl } from "./utils.js";
import { buildCard } from "./buildCard.js";

async function getWeatherData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  let list = [...jsonData.list];
  list.map((item) => {
    buildCard(item);
  });
}

async function getLocation(url) {
  forecastHeader.innerText = "";
  const response = await fetch(url);
  const jsonData = await response.json();
  const result = await jsonData.name;
  forecastHeader.innerText = `Forecast for: ${result}`;
}

const form = document.getElementById("form");
const { zipCode } = form;

let forecastHeader = document.getElementById("forecast");
let weatherSection = document.getElementById("weather");

const handleFormSubmission = (e) => {
  e.preventDefault();
  forecastHeader.innerText = "";
  weatherSection.innerHTML = null;
  let url = getWeatherUrl(zipCode.value);
  let weatherData = getWeatherData(url);
  let location = getGeoUrl(zipCode.value);
  getLocation(location);
};

form.addEventListener("submit", handleFormSubmission);
let outputSection = document.getElementById("output");
