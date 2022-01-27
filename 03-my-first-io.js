const fs = require('fs');

const filename = process.argv[2];
const encoding = 'utf-8';
const file = fs.readFileSync(filename, encoding);
// creates an array of lines split from the read string
// -1 not to count '\n' after last line
const lines = file.split('\n').length - 1;
console.log(lines);
