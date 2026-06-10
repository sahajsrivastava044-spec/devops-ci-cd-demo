const fs = require("fs");

console.log("Running simple lint...");

const content = fs.readFileSync("server.js", "utf8");

if (content.includes("console.log('bad')")) {
  console.error("Lint failed: bad console pattern found");
  process.exit(1);
}

console.log("Lint passed");
process.exit(0);