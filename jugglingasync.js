var http = require('http')
var bl = require('bl')
var async = require('async')
var fs = require('fs')

var results = []
var count = 0

function print () {
	for (i = 0; i < 3; i++) { 
		console.log(results[i])
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function callback (response) { 
		response.pipe(bl(function (err, data) {
			results[index] = data.toString()
			count++

			if (count == 3)
				print()
		}))
	})

}

for (i = 0; i < 3; i++) {

	httpGet(i)
}
