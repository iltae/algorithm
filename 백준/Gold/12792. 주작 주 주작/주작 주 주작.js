const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  if (Number(input[i]) === i) {
    console.log("-1");
    process.exit(0);
  }
}

console.log("1000003");