const express = require("express");
// const accountRoutes = require("./routes/accountRoutes");
const db = require("./data/dbConfig");
const server = express();
server.use(express.json());

// server.use("/", accountRoutes);
server.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => res.status(200).send(accounts))
    .catch(err =>
      res.status(500).send({
        message: "Accounts were not able to be found.",
        error: err
      })
    );
});

server.post("/", (req, res) => {
  db("accounts")
    .insert(req.body)
    .then(account =>
      res
        .status(201)
        .send({ response: account, message: "Account successfully added." })
    )
    .catch(err =>
      res
        .status(500)
        .send({ error: err, message: "Account was not added to the database" })
    );
});

// db('users').where({ id: 3 })
// .update({name: 'Ava', age: 33 });

server.put("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(account =>
      res
        .status(200)
        .send({ result: account, message: "Account successfully updated" })
    )
    .catch(err => {
      res
        .status(500)
        .send({ errorMessage: "Account was not updated", error: err });
    });
});

server.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(response =>
      res
        .status(200)
        .send({ message: "Account successfully deleted", response: response })
    )
    .catch(err =>
      res
        .status(500)
        .send({ errorMessage: "Account was not deleted", error: err })
    );
});

module.exports = server;
