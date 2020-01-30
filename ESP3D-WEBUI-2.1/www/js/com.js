import {SocketIO} from "https://cdn.socket.io/socket.io-1.0.0.js"

      
      
const SocketIO = io('http://public.valjang.fr:2000');

SocketIO.on('commende', function(commende){
      console.log("I'm connected !")
      SendPrinterCommand(commende,true)
  });

  SocketIO.on('disconnect', function(){
      console.log("Server offline !")
  });
   
    