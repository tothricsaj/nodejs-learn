const fs = require('fs')
const fileBuff = fs.readFileSync(process.argv[2]);

console.log(fileBuff.toString().split('\n').length)
