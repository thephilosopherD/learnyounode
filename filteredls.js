var fs = require('fs')
var pa = require('path')
var ext ='.'+ process.argv[3]

var filenames = fs.readdir(process.argv[2], 
function callback (err, list){
if (err) throw err;
var filtered = filenames.filter(function (a){
return (pa.extname(a) === ext);
 });
for (var i = 0; i < filtered.length; i++){
console.log(filtered[i]);
 }
});

//Official Solution: 

//   var fs = require('fs')
//    var path = require('path')
    
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })

