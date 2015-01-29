var module = require('./module.js') 
var dir = process.argv[2]
var ext = process.argv[3]

module.read(dir, ext, function (err, files) {
	if (err){
		return console.error('Oops, something went wrong.', err)
	}

	else {
	 for (i = 0; i < files.length; i++) {
		 console.log(dir[i])
	 }
	}
}
 

