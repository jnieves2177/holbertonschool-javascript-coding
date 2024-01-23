#!/usr/bin/node
const requestURL = process.argv[2];
const request = require('request');

request(requestURL, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  console.log('code:', response && response.statusCode); // Print the response status code if a response was received
});