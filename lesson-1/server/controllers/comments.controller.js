const express = require("express");

const commentsService = require("../services/comments.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(commentsService.getCommentsForArticle(req.article.id));
});

router.post("/", (req, res) => {
  const { author, text } = req.body ?? {};
  const comment = commentsService.addComment(req.article.id, { author, text });

  res.status(201).location(req.baseUrl).json(comment);
});

module.exports = router;
