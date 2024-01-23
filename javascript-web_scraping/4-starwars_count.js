#!/usr/bin/node
const URL = process.argv[2];
const request = require('request');
const wedge = '18';
request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  let count = 0;
  const results = JSON.parse(body).results;
  for (let i = 0; i < results.length; i++) {
    let j = 0;
    const characters = results[i].characters;
    for (j; j < characters.length; j++) {
      if (characters[j].includes(wedge)) {
        count++;
      }
    }
  }
  console.log(count);
});