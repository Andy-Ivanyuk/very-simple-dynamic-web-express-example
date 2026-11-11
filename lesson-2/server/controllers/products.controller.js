const express = require("express");

const productsService = require("../services/products.service");

const router = express.Router();

router.get("/", (_req, res) => res.json(productsService.getProducts()));

module.exports = router;
