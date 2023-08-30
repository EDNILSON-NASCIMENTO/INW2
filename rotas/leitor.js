const { error } = require('console');
const fs = require('fs')



var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);