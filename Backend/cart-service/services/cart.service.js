const { query } = require("../helpers/db.init");

function getCartItems(userId) {
  return new Promise((resolve, reject) => {
    query("select * from cart where buyer = ?", [userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function addToCart(userId, productId, qty) {
  return new Promise((resolve, reject) => {
    query(
      `select * from cart where buyer = ? and product = ?`,
      [userId, productId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows.length === 0) {
            query(
              "insert into cart(buyer, product, qty) values(?, ? ,? )",
              [userId, productId, qty],
              (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              }
            );
          } else {
            reject(new Error("This item already added"));
          }
        }
      }
    );
  });
}

function updateCartItem(userId, productId, qty) {
  return new Promise((resolve, reject) => {
    query(
      "select * from cart where buyer = ? and product = ?",
      [userId, productId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          // if (result.length != 0 && result.qty != qty) {
          //   query(
          //     "update cart set qty = ? where buyer = ? and product = ? ",
          //     [qty, userId, productId],
          //     (err, response) => {
          //       if (err) {
          //         reject(err);
          //       } else {
          //         resolve(response);
          //       }
          //     }
          //   );
          // } else {
          //   reject(new Error("Nothing to update"));
          // }
        }
      }
    );
  });
}

module.exports = { getCartItems, addToCart, updateCartItem };
