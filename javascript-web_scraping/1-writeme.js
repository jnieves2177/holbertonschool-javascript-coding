#!/usr/bin/node
const fs = require('fs');
let fp = process.argv[2];
const phrase = process.argv[3];
if (!fp) {
  fp = 'notFound';
}
fs.writeFile(fp, phrase, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});