const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);
const N = Number(input[0]);

const times = input.slice(1).map((line) => line.split(" ").map(Number));

times.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let endTime = times[0][1];
let count = 1;
let index = 1;

while (index < times.length) {
  const [start, end] = times[index];
  if (start >= endTime) {
    endTime = end;
    count++;
  }

  index++;
}

console.log(count);
