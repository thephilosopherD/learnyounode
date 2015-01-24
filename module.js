var fs = require('fs')
var path = require('path')

module.exports = function read (file, ext, callback {
 error(function (err, data){
  if (err)
   return callback(err)
  data = fs.readdir(file, function (err, list) {
	  list.forEach(function (file) {
		  if (path.extname(file) === ext)
			  console.log(file)
	  })
  })
  callback(null, data)
 })
})
