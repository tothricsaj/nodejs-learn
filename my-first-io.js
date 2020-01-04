const fs = require('fs')
const fileBuff = fs.readFileSync(process.argv[2]);

console.log(String.prototype.split(fileBuff.toString(), '\n'))
