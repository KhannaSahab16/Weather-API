const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per hour
  message: {
    error: "Too many requests from this IP, please try again after an hour."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
