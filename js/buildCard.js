import { dateFixer } from "./utils.js";

export const buildCard = (data) => {
  let target = document.getElementById("weather");
  let newCard = document.createElement("article");
  let dateData = data.dt_txt;
  //   let date = dateFixer(data.dt_txt);
  console.log(dateData);
  let time = date.split(" ")[1];
  //   console.log(time);
  //   if (time === "12:00:00") {
  //   }
};
