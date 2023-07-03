const fs = require('fs');

const fileName = './sampledata.txt'

const readable = fs.createReadStream(fileName);

let data = '';

readable.on('data', function(chunk) {
  data += chunk
});

readable.on('end', function() {
  console.log(data)
})