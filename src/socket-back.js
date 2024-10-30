import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log("um cliente se conectou ID do socket: ", socket.id);    
  });