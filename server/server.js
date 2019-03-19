const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aa1779144",
  database: "TradingPlatform"
});

connection.connect(err => {
  if (err) {
    console.log("Something went wrong!");
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

connection.query("SELECT * FROM UserAccount", (err, res, fields) => {
  console.log(err);
  console.log(res);
  console.log(fields);
});

app.post("/api/register", (req, res) => {
  const registerInformation = {
    userID: uuidv4(),
    username: req.body.email,
    userFullName: req.body.fullName,
    userPassword: bcrypt.hashSync(req.body.password, 10)
  };
  connection.query(
    "INSERT INTO UserAccount SET ?",
    registerInformation,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.sendStatus(200);
      console.log(result);
    }
  );
});

app.post("/api/login", (req, res) => {
  const loginInformation = {
    username: req.body.username,
    password: req.body.password
  };
  connection.query(
    "SELECT userID, userFullName, username, userPassword FROM UserAccount WHERE username = ?",
    loginInformation.username,
    (err, results, fields) => {
      if (err) {
        res.sendStatus(400);
        console.log(err);
      }
      if (results.length != 0) {
        console.log(results);
        if (
          bcrypt.compareSync(loginInformation.password, results[0].userPassword)
        ) {
          const userInformation = {
            userFullName: results[0].userFullName,
            username: results[0].username,
            userID: results[0].userID
          };
          res.send(userInformation);
        } else {
          res.sendStatus(400);
        }
      } else {
        res.sendStatus(400);
      }
    }
  );
});

app.post("/api/records", (req, res) => {
  connection.query(
    "SELECT * FROM StockRecord WHERE userID = ?",
    req.body.userID,
    (err, results, fields) => {
      if (err) {
        res.sendStatus(400);
      }
      if (results.length != 0) {
        res.send(results);
      } else {
        res.sendStatus(400);
      }
    }
  );
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
