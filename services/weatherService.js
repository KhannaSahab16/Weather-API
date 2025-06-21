const axios = require("axios");
const API_KEY = process.env.WEATHER_API_KEY;
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600 }); 

async function getWeatherByCity(city, units = "metric") {
  const cacheKey = `${city}-${units}`;
  const cached = cache.get(cacheKey);

  if (cached) return cached;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const response = await axios.get(url);
  const data = response.data;

 const result = {
    city: data.name,
    country: data.sys.country,
    temperature: `${data.main.temp}°${units === 'imperial' ? 'F' : 'C'}`,
    description: data.weather[0].description,
    humidity: `${data.main.humidity}%`,
    windSpeed: `${data.wind.speed} ${units === 'imperial' ? 'mph' : 'm/s'}`,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };
cache.set(cacheKey, result); 
  return result;
}

async function getForecast(city, units = 'metric') {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;
  const response = await axios.get(url);
  return response.data;
}

async function getWeatherByCoordinates(lat, lon, units = 'metric') {
  const key = `${lat},${lon}-${units}`;
  const cached = cache.get(key);

  if (cached) return cached;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;
  const response = await axios.get(url);
  const data = response.data;

  const result = {
    city: data.name,
    country: data.sys.country,
    temperature: `${data.main.temp}°${units === 'imperial' ? 'F' : 'C'}`,
    description: data.weather[0].description,
    humidity: `${data.main.humidity}%`,
    windSpeed: `${data.wind.speed} ${units === 'imperial' ? 'mph' : 'm/s'}`,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };
  cache.set(Key, result); 
  return result;
}

module.exports = { getWeatherByCity, getForecast,getWeatherByCoordinates };
