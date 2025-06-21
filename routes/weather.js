const express = require("express");
const router = express.Router();
const { getWeatherByCity, getForecast ,getWeatherByCoordinates } = require("../services/weatherService");
const { groupForecastData } = require("../utils/parseForecast");
const rateLimit = require("express-rate-limit");


router.get("/", async (req, res) => {
  const city = req.query.city;
  const units = req.query.units || 'metric';

  if (!city) return res.status(400).json({ error: "City name is required" });

  try {
    const weatherData = await getWeatherByCity(city, units);
    res.json(weatherData);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
  }
});

const forecastLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 20, 
  message: {
    error: "Too many forecast requests, slow down!"
  }
});
router.get("/forecast" , forecastLimiter, async (req, res) => {
  const city = req.query.city;
  const units = req.query.units || 'metric';

  if (!city) return res.status(400).json({ error: "City name is required" });

  try {
    const data = await getForecast(city, units);
    const groupedForecast = groupForecastData(data.list, units);

    res.json({
      city: data.city.name,
      forecast: groupedForecast
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast", details: error.message });
  }
});

router.get("/coordinates", async (req, res) => {
  const { lat, lon, units = "metric" } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

  try {
    const weatherData = await getWeatherByCoordinates(lat, lon, units);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
  }
});


module.exports = router;
