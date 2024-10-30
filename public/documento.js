const socket = io();

socket.emit('mensagem', 'Olá, servidor!');
