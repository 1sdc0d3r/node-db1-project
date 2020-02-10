const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

router.get("/", (req, res) => {
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
