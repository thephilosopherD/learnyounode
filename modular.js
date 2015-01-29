var files = require('./module.js')

var dir = process.argv[2]
var ext = process.argv[3]

files (dir, ext, function(err, data) {
	if (err)
		console.error('Whoopsy Daisy')

	else
		data.forEach(function(name) {
			console.log(name)
		})
})
	
//Official Solution

//solution.js:

//    var filterFn = require('./solution_filter.js')
//	  var dir = process.argv[2]
//	  var filterStr = process.argv[3]
			    
//	  filterFn(dir, filterStr, function (err, list) {
//		  if (err)
//           return console.error('There was an error:', err)
										      
//        list.forEach(function (file) {
//			  console.log(file)
//		  })
//		 })

