const fs = require("fs");

console.log("Running basic tests...");

if (!fs.existsSync("server.js")) {
  console.error("server.js does not exist");
  process.exit(1);
}

console.log("All tests passed");
process.exit(0);