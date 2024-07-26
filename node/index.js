const express = require("express");
const mysql = require("mysql");
const faker = require("@faker-js/faker");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  const randomName = faker.person.fullName();
  const sql = `INSERT INTO Person(name) values ('${randomName}')`;
  connection.query(sql);

  let response = "<h1>Full Cycle Rocks!</h1>";

  connection.query(`SELECT name from Person`, function (err, results, fields) {
    results.forEach((result) => {
      response += `<br>${result.Name}`;
    });

    res.send(response);
  });

  connection.end();
});

app.get("/ping", (req, res) => {
  res.send("Service is running");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
