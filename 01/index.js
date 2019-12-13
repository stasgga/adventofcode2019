const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  const result = data
    .toString()
    .split("\n")
    .filter(Boolean)
    .reduce((acc, curr) => acc + Math.floor(parseInt(curr, 10) / 3) - 2, 0);
  console.log(result);
});
