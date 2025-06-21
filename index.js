require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weather");
const logger = require('./middleware/logger');
const infoRoutes = require("./routes/info");
const rateLimiter = require("./middleware/rateLimiter");
const helmet = require("helmet");



dotenv.config();

const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use(helmet());
app.use(morgan("dev"));
app.use(logger);

app.use("/weather", weatherRoutes);
app.use("/", infoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌤️ Weather API server running on port ${PORT}`);
});
