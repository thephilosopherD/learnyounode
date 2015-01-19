var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', 
function callback (err, line){
if (err) throw err;
console.log(line.split('\n').length-1);
});


