// get weather api call
const getWeather = async (count) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&cnt=${count}&appid=c5a484c5c3125843e3a5fc1dbfe66e1b`
  );
  const jsonData = await response.json();
  console.log(jsonData);
};

getWeather(7);
