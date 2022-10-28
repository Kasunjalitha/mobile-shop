const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
} = require("./services/product.service");

// Get all products
productRouter.get("/", (req, res) => {
  getAllProducts()
    .then(products => {
      return res.status(200).send(products);
    })
    .catch(err => {
      return res.status(401).send(err);
    });
});

// Get single product
productRouter.get("/:id", (req, res) => {
  const productId = req.params.id;
  getProduct(productId)
    .then(product => {
      return res.status(200).send(product);
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

// Add new product
productRouter.post("/", (req, res) => {
  const product = {
    device_name: req.body.device_name,
    chip: req.body.chip,
    ram: req.body.ram,
    storage: req.body.storage,
    image: req.body.image,
    price: req.body.price,
    qty: req.body.qty,
  };
  addProduct(product)
    .then(response => {
      return res.status(201).send(response);
    })
    .catch(err => {
      return res.status(501).send(err);
    });
});

//Update product
productRouter.put("/:id", (req, res) => {
  const productId = req.params.id;
  updateProduct(productId, product)
    .then(response => {
      return res.status(204).send(response);
    })
    .catch(err => {
      return res.status(501).send(err);
    });
});

// Remove product
productRouter.delete("/:id", (req, res) => {
  const productId = req.params.id;
  removeProduct(productId)
    .then(response => {
      return res.status(204).send(response);
    })
    .catch(err => {
      return res.status(501).send(err);
    });
});

productRouter.get("/test", (req, res) => {
  return res.send("Testing works");
});

module.exports = productRouter;
