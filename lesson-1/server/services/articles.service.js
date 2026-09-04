const repository = require("../data-access/articles.repository");

function getArticleSummaries() {
  return repository.findAll();
}

function getArticle(id) {
  return repository.findById(id);
}

module.exports = { getArticleSummaries, getArticle };
