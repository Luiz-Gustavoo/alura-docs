// esse arquivo é responsável por manipular o HTML da página documento

import { emitirTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export {atualizaTextoEditor};
