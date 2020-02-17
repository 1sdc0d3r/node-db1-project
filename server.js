const express = require("express");
const accountRoutes = require("./routes/accountRoutes");

const server = express();
server.use(express.json());

server.use("/accounts", accountRoutes);

server.use("/", (req, res) => {
  res.send("API WORKING");
});

module.exports = server;
