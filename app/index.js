require("./index.css");

const { Weather } = require("./Weather");

const { Dom } = require("./Dom");
const { LocalStore } = require("./LocalStore");

const dom = new Dom();

const localstore = new LocalStore();
const { city, countryCode } = localstore.getLocationData();

const weather = new Weather(city, countryCode);

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  dom.app(data);
}
const button = document.getElementById("button");
if (button) {
  button.addEventListener("click", function () {
    const city = document.getElementById("city").value;

    weather.changecity(city, countryCode);
    fetchWeather();
    e.preventDefault();
  });
}

document.addEventListener("DOMContentLoaded", fetchWeather);
