const express = require("express");
const bodyParser = require("body-parser");
const cartRouter = require("./cart");

const app = express();
app.use(bodyParser.json());
app.use("/cart", cartRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`CART SERVICE listening on port ${PORT}...`);
});
