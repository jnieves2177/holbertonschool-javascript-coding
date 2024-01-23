#!/usr/bin/node
const fs = require('fs');
let fp = process.argv[2];
if (!fp) {
  fp = 'notFound';
}
fs.readFile(fp, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});