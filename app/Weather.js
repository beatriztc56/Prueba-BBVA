export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "a5fb8900d85680c200b4aebad564c56c";
    this.city = city;
    this.countryCode = this.countryCode;
  }

  async getWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  }
  changeCity(city) {
    this.city = city;
    this.countryCode = this.countryCode;
  }
}
