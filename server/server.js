var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
	console.log('a user has connected')
	socket.on('chatMessage', message => {
		io.emit('chatMessage', message)
	})
});

http.listen(3000, function () {
	console.log('listening on 3000');
});