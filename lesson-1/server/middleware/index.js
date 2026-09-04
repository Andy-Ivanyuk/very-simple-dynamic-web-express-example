const articlesService = require("../services/articles.service");

function logger(req, res, next) {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });

  next();
}

function articleId(req, res, next, value) {
  const id = Number(value);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "id is incorrect." });
  }

  const article = articlesService.getArticle(id);

  if (!article) {
    return res.status(404).json({ error: `No article with id ${id}.` });
  }

  req.article = article;
  next();
}

function notFound(req, res) {
  res.status(404).json({
    error: `No route for ${req.method} ${req.originalUrl}.(modified response)`,
  });
}

function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;

  if (status === 500) console.error(err);

  res.status(status).json({
    error: status === 500 ? "Something went wrong on the server." : err.message,
  });
}

module.exports = { logger, articleId, notFound, errorHandler };
