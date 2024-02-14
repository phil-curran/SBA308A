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

const form = document.getElementById("form");
const { zipCode } = form;

const handleFormSubmission = (e) => {
  e.preventDefault();
  let url = getWeatherUrl(zipCode.value);
  let weatherData = getWeatherData(url);
};

form.addEventListener("submit", handleFormSubmission);
let outputSection = document.getElementById("output");
