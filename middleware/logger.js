const logger = (req, res, next) => {
  if (req.query.city) {
    console.log(`[${new Date().toISOString()}] Request for ${req.query.city}`);
  }
  next();
};

module.exports = logger;