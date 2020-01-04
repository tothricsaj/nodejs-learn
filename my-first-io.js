const fs = require('fs')
const fileBuff = fs.readFileSync(process.argv[2]);
console.log(fileBuff.toString());
// console.log(String.prototype.split(, '\n'))
