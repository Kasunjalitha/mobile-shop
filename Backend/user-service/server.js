const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./user");

const app = express();
app.use(bodyParser.json());
app.use("/user", userRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`USER SERVICE listening on port ${PORT}...`);
});
