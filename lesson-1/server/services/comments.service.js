const repository = require("../data-access/comments.repository");

const MAX_TEXT = 50;

function getCommentsForArticle(articleId) {
  return repository.findByArticleId(articleId);
}

function addComment(articleId, { author, text }) {
  const cleanAuthor = String(author ?? "").trim();
  const cleanText = String(text ?? "").trim();

  if (cleanAuthor === "" || cleanText === "") {
    throw badRequest("Both author and text are required.");
  }

  if (cleanText.length > MAX_TEXT) {
    throw badRequest(`A comment cannot be longer than ${MAX_TEXT} characters.`);
  }

  return repository.insert({
    articleId,
    author: cleanAuthor,
    text: cleanText,
    createdAt: new Date().toISOString(),
  });
}

function badRequest(message) {
  const error = new Error(message);
  error.status = 400;
  return error;
}

module.exports = { getCommentsForArticle, addComment };
