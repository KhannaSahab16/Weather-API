require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weather");
const logger = require('./middleware/logger');



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(logger);
app.use("/api/weather", weatherRoutes);


app.listen(PORT, () => {
  console.log(`🌤️ Weather API server running on port ${PORT}`);
});
