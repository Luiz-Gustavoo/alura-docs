// esse arquivo é responsável pelo socket do front end(emitir e receber)

import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto)
    
});

export {emitirTextoEditor};