const bl = require("bl");
const http = require("http");

const res = [];
let count = 0;

function printResults() {
  for (i = 0; i < 3; i++) {
    console.log(res[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          return console.error(err);
        }

        res[index] = data.toString();
        count++;

        if (count === 3) {
          printResults();
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
