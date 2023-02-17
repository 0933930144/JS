var connect = require("../db/connectDB");

class Account {
  findAll = (result) => {
    connect.query("SELECT * FROM account", function (err, data) {
      if (err || data.length == 0) {
        result(err, null);
      } else {
        result(null, data);
      }
    });
  };
  findByEmail = (email, result) => {
    connect.query(
      "SELECT * FROM account WHERE email=?",
      [email],
      function (err, data) {
        if (err || data.length == 0) {
          result(err, null);
        } else {
          result(null, data);
        }
      }
    );
  };
  create = (email, result) => {
    connect.query(
      "INSERT INTO * FROM account WHERE email=?",
      [email],
      function (err, data) {
        if (err || data.length == 0) {
          result(err, null);
        } else {
          result(null, data);
        }
      }
    );
  };
}
module.exports = new Account();
