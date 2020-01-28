function Server(opt) {
    this.opt = opt;
    this.httpServer = require('http').createServer();
    this.io = require('socket.io')(this.httpServer)
    this.start();
}


Server.prototype.start = function() {


    
that = this;
   


//Player connecting
   this.io.on('connection', function(socket) {
  console.log(socket.id)
    socket.on('Imhere', function() {

           

        socket.broadcast.emit('commende',"M117 Connected !");
       

    })

        socket.broadcast.emit('Disconnect', socket.id);
    });






 
    //Runnig server
    this.httpServer.listen(this.opt.port, function() {
        console.log("le server écoute le port: " + that.opt.port )
       
    });
};
module.exports = Server;
