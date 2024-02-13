import { getWeatherUrl, getGeoUrl } from "./utils.js";

async function getWeatherData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  let list = [...jsonData.list];
  console.log(list[0].dt_txt);
}

const form = document.getElementById("form");
const { zipCode } = form;

const handleFormSubmission = (e) => {
  e.preventDefault();
  let url = getWeatherUrl(zipCode.value);
  getWeatherData(url);
};

form.addEventListener("submit", handleFormSubmission);
