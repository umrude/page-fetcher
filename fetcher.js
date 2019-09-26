let test = process.argv.splice(2);
const request = require('request');
const fs = require('fs');

request(test[0], (error, response, body) => {
  if (error) throw error;
  fs.writeFile(test[1], body, function(err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${response["headers"]["content-length"]} bytes to ${test[1]}`);
  });
});






