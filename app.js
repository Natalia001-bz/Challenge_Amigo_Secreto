// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    
    const guardarAmigo = document.getElementById("amigo");
    const nombre = guardarAmigo.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);   
    guardarAmigo.value = "";
    mostrarLista();
}


function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const nombreAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nombreAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
