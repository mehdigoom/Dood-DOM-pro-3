const io = require('socket.io-client');
// or with import syntax
import io from 'socket.io-client';
const socket = io('http://public.valjang.fr:2000');
io.on('connection', (socket) => {
    socket.emit('Imhere',"pro3");
    socket.on('commende', function(id) {
        SendPrinterCommand(id, true);
        console.log("Commende recu:"+ id)
    });
  });