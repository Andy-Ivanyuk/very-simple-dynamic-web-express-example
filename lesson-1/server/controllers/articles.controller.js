const express = require("express");

const articlesService = require("../services/articles.service");
const { articleId } = require("../middleware");

const router = express.Router();

router.param("id", articleId);

router.get("/", (_req, res) => res.json(articlesService.getArticleSummaries()));
router.get("/:id", (req, res) => res.json(req.article));
router.use("/:id/comments", require("./comments.controller"));

module.exports = router;
