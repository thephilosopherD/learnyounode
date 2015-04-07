var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
	var extension = '.' + ext
	fs.readdir(dir, function(err, list) {
		if (err) {
			callback (err, null)
		}

		else {
			var files = []
			list.forEach(function(name) {
				if (path.extname(name) == extension) {
					files.push(name)
				}
			})

			callback(null, files)
		}
	})
}

//Official Solution

//    var fs = require('fs')
//    var path = require('path')
		    
//    module.exports = function (dir, filterStr, callback) {
//	fs.readdir(dir, function (err, list) {
//         if (err)
//            return callback(err)
//            list = list.filter(function (file) {
//	      return path.extname(file) === '.' + filterStr
//		})
																	    
//		callback(null, list)
//		  })
//		    }

