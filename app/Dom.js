export class Dom {
  constructor() {
    this.location = document.getElementById("weatherLocation");
    this.temp = document.getElementById("Temperature");
    this.hum = document.getElementById("Humidity");
    this.wind = document.getElementById("Wind");
  }

  app(weather) {
    this.location.textContent = weather.name + " / " + weather.sys.country;
    this.temp.textContent = weather.main.temp + "ºC";
    this.hum.textContent = "Humedad:" + weather.main.humidity + "%";
  }
}
