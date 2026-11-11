const repository = require("../data-access/products.repository");

function getProducts() {
  return repository.findAll();
}

module.exports = { getProducts };
