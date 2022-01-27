const fs = require('fs');

const filename = process.argv[2];
fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) throw err;
  const lines = data.split('\n').length - 1;
  console.log(lines);
});
