const { query } = require("../helpers/db.init");

function findUser(email) {
  return new Promise((reject, resolve) => {
    query(`select * from user where id = ?`, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function createUser(data) {
  return new Promise((reject, resolve) => {
    query(
      `INSERT INTO user(email, first_name, last_name, password) VALUES (?, ?, ?, ?)`,
      [data.email, data.first_name, data.last_name, data.password],
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

function getUser(email) {
  return new Promise((reject, resolve) => {
    query(`select * from user where email = ?`, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { createUser, findUser, getUser };
