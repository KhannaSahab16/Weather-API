const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/about");
});

router.get("/about", (req, res) => {
  res.json({
    name: "Weatherify Backend",
    version: "1.0.0",
    description: "Weather data API built with Node.js, Express, and OpenWeatherMap.",
    author: "Mehul Khanna",
    github: "https://github.com/KhannaSahab16/weatherify-backend",
    endpoints: {
      currentByCity: "/weather?city=...",
      currentByCoordinates: "/weather/coordinates?lat=...&lon=...",
      forecast: "/weather/forecast?city=..."
    }
  });
});

module.exports = router;
