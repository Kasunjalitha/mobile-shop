const express = require("express");
const {
  addToCart,
  getCartItems,
  updateCartItem,
} = require("./services/cart.service");
const cartRouter = express.Router();

// Get all cart items
cartRouter.get("/items", (req, res) => {
  const userId = 2; // Get this from token
  getCartItems(userId)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(501).send(err);
    });
});

// Add new item to cart
cartRouter.post("/items", (req, res) => {
  const userId = req.body.userId; // get this from the access token
  const productId = req.body.productId;
  const qty = req.body.qty;

  addToCart(userId, productId, qty)
    .then(result => {
      return res.status(201).send(result);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
});

// Update cart item
cartRouter.get("/item", (req, res) => {
  // const userId = req.body.userId; // get this from the access token
  // const productId = req.body.productId;
  // const qty = req.body.qty;

  const userId = 2;
  const productId = 2;
  const qty = 3;

  updateCartItem(userId, productId, qty)
    .then(response => {
      return res.status(203).send(response);
    })
    .catch(err => {
      console.log(err);
      return res.status(402).send(err);
    });
});

// Remove item from the cart
cartRouter.delete("/", (req, res) => {
  const productId = req.body.productId;
  const userId = req.body.userId;
});

cartRouter.get("/test", (req, res) => {
  return res.send("CART SERVICE");
});

module.exports = cartRouter;
