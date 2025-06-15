const express = require("express");
const router = express.Router();
const { getCurrentWeather, getForecast } = require("../services/weatherService");

router.get("/", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City name is required" });

  try {
    const data = await getCurrentWeather(city);

    res.json({
      location: data.name,
      country: data.sys.country,
      temperature_celsius: data.main.temp,
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      wind_kph: data.wind.speed * 3.6,
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
  }
});

router.get("/forecast", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City name is required" });

  try {
    const data = await getForecast(city);
    const forecast = data.list.slice(0, 3).map((entry) => ({
      datetime: entry.dt_txt,
      temperature: entry.main.temp,
      condition: entry.weather[0].description,
    }));

    res.json({ city: data.city.name, forecast });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast", details: error.message });
  }
});

module.exports = router;
