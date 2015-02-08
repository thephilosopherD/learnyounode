var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	if (req.method == 'POST')
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res)
	else
		return res.end('POST method needed.\n')
})
server.listen(Number(process.argv[2]))

//Alternate

// var http = require('http')
// var map = require('through2-map')

// var upper = map(function (chunk) {
//	return chunk.toString().toUpperCase()
// })

// var server = http.createServer(function (req, res) {
//	if (req.method == 'POST')
//		req.pipe(upper).pipe(res)
// })
// server.listen(Number(process.argv[2]))


// Official

// var http = require('http')
// var map = require('through2-map')
	    
// var server = http.createServer(function (req, res) {
//	 if (req.method != 'POST')
//		 return res.end('send me a POST\n')
								      
//	 req.pipe(map(function (chunk) {
//		 return chunk.toString().toUpperCase()
//	 })).pipe(res)
// })
			    
// server.listen(Number(process.argv[2]))

