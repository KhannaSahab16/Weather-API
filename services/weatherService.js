const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;

const getCurrentWeather = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

const getForecast = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

module.exports = { getCurrentWeather, getForecast };
