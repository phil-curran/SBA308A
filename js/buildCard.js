import { dateFixer } from "./utils.js";
import { tempConverter } from "./utils.js";
import { getIcon } from "./getIcon.js";

export const buildCard = (data) => {
  let target = document.getElementById("weather");
  let date = dateFixer(data.dt_txt.split(" ")[0]);
  let time = data.dt_txt.split(" ")[1];
  if (time === "12:00:00") {
    let cardInfo = `
      <article>
        <header>${date}</header>
        <p>${data.weather[0].main}</p>
        <p>${getIcon(data.weather[0].icon)}</p>
        <p>Temp: ${tempConverter(data.main.temp)}</p>
        <p>Pressure: ${data.main.pressure}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      </article>
      `;
    target.innerHTML += cardInfo;
  }
};
