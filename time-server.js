var net = require('net')
var server = net.createServer(function (socket) {
	var date = new Date()
	var dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) 
				     + '-' + ('0' + date.getDate()).slice(-2) + " " + date.getHours() +
					 ':' + date.getMinutes() + '\n'
	socket.write(dateString)
	socket.end() 
	//Or, just socket.end(dateString) to simplify
})
server.listen(process.argv[2])


//Official 

// var net = require('net')

// function zeroFill(i) {
// 	return (i < 10 ? '0' : '') + i
//	}

// function now () {
//	var d = new Date()
//	return d.getFullYear() + '-'
//		+ zeroFill(d.getMonth() + 1) + '-'
//		+ zeroFill(d.getDate() + ' ' 
//		+ zeroFill(d.getHours()) + ':'
// 		+ zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
// 	socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))



