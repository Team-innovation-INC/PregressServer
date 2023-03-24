const socketIo = require('socket.io');

let io;
function initializeSocket(server) {
  const io = socketIo(server);

  io.on('connection', function(socket) {
    console.info('a user connected');

    // listen for new messages from the client
    socket.on('new message', function(data) {
      console.info('new message received:', data);

      // your code to save the new message to the database goes here

      // broadcast the new message to all connected clients
      io.emit('new message', data);
    });

    // listen for disconnection events
    socket.on('disconnect', function() {
      console.info('user disconnected');
    });
  });
}

module.exports = { initializeSocket, io };
