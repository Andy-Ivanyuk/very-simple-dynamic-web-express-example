function logger(req, res, next) {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });

  next();
}

function notFound(req, res) {
  res.status(404).json({
    error: `No route for ${req.method} ${req.originalUrl}.`,
  });
}

function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;

  if (status === 500) console.error(err);

  res.status(status).json({
    error: status === 500 ? "Something went wrong on the server." : err.message,
  });
}

module.exports = { logger, notFound, errorHandler };
