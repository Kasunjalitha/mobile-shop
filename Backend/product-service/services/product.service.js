const { query } = require("../helpers/db.init");

function getAllProducts() {
  return new Promise((resolve, reject) => {
    query("select * from device", (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getProduct(productId) {
  return new Promise((resolve, reject) => {
    query("select * from device where id = ?", [productId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function addProduct(product) {
  return new Promise((resolve, reject) => {
    query(
      `INSERT INTO device(device_name, chip, ram, storage, image, price, qty) VALUES (?, ?, ?, ? ,?, ?,?)`,
      [
        product.device_name,
        product.chip,
        product.ram,
        product.storage,
        product.image,
        product.price,
        product.qty,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function updateProduct(productId, product) {
  return new Promise((resolve, reject) => {});
}

function removeProduct(productId) {
  return new Promise((resolve, reject) => {
    query("delete from device where id = ?", [productId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
};
