const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

let deliveredOrders = [];

// what should we do on startup
// start by getting all the orders we care about
socket.emit('subscribe', 'flower-vendor');
socket.emit('getAll', 'flower-vendor');

socket.on('queue', (payload) => {
    if (payload && payload.length)
        console.log('Thank you for delivering order', payload[0]);

    socket.emit('received', 'flower-vendor');
});
