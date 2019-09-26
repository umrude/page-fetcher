let test = process.argv.splice(2);
const request = require('request');
const fs = require('fs');

request(test[0], (error, response, body) => {
  if (error) throw error;
  
  fs.writeFile(test[1], body, function(err) {
    if (err) throw err;
    fs.stat(test[1],(err, stats) => {
      if (err) throw err;
      let bytes = stats["size"];
      console.log(`Downloaded and saved ${bytes} bytes to ${test[1]}`);
    });
  });
});






