const path = require("node:path");
const express = require("express");

const { logger, notFound, errorHandler } = require("./middleware");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger);

app.use("/api/products", require("./controllers/products.controller"));

app.use(express.static(path.join(__dirname, "..", "ui")));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Products is running on http://localhost:${PORT}`);
});
