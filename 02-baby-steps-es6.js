// same as baby-steps but with es6 js knowledge
const total = process.argv
  .map((val) => +val)
  .filter((val) => Number.isInteger(val))
  .reduce((sum, val) => sum + val);

console.log(total);
