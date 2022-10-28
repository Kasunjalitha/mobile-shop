const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./product");

const app = express();
app.use(bodyParser.json());
app.use("/product", productRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`PRODUCT SERVICE listening on port ${PORT}...`);
});
