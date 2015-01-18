var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var ar = str.split('\n')
var nl = ar.length - 1

console.log(nl);

//Official:  
   // var fs = require('fs')
    
   // var contents = fs.readFileSync(process.argv[2])
   // var lines = contents.toString().split('\n').length - 1
   // console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
 
