const fs = require("fs");
const path = require("path");
const file = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(file, function (err, contents) {
  if (err) {
    return console.log(err);
  }
  contents.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
