const express = require("express");
const { createUser, findUser, getUser } = require("./services/user.service");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

userRouter.post("/", async (req, res) => {
  const encrypted_password = await bcrypt.hash(req.body.password, 10);

  const data = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: encrypted_password,
  };

  findUser(data.email)
    .then(response => {
      if (response.length == 0) {
        createUser(data)
          .then(response => {
            return res.status(201).send("success");
          })
          .catch(err => {
            return res.status(501).send("error");
          });
      }
    })
    .catch(err => {
      return res.status(501).send("error");
    });
});

userRouter.post("/login", (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  getUser(data.email)
    .then(response => {
      return res.send("");
    })
    .catch(err => {
      return res.status().send("");
    });
});

module.exports = userRouter;
