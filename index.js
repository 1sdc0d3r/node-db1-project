const server = require("./server.js");
require(".env");

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
