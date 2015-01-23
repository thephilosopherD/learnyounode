var fs = require('fs')
var path = require('path')

module.exports = function read (process.argv[2], process.argv[3], callback){
 error(function (err, data){
  if (err)
   return callback(err)

  callback(null, data)
 })
}
