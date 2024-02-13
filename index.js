import { API_KEY } from "./api.js";
import { getWeatherUrl, getGeoUrl } from "./utils.js";

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
