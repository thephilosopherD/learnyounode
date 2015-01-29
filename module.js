var fs = require('fs')
var path = require('path')

module.exports = function read (dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
	  if (err) {
		  callback (err, null)
	  }
	  else {
		  var list = []
          data.forEach(function (name) {
		    if (path.extname(name) === ext) {
			  list.push(name)
			}
	  })
  callback(null, data)
	  }
 })
}

