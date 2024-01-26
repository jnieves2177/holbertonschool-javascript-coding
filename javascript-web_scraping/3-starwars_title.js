#!/usr/bin/node
const ep = process.argv[2];
const request = require('request');
const URL = 'https://swapi-api.hbtn.io/api/films/' + ep;
request(URL, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
