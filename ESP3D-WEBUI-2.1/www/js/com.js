const io = require('socket.io-client');
socket = io.connect("192.168.1.52:2000")

socket.on('connect_timeout', (timeout) => {
    alert("Error")
  });

    socket.emit('Imhere');
    socket.on('commende', function(id) {
        SendPrinterCommand(id, true);
        console.log("Commende recu:"+ id)
        //SendPrinterCommand("M117"+" '"+id+"'", true);
    });
