const fs = require("node:fs");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "data", "products.json");

function findAll() {
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

module.exports = { findAll };
