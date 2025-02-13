// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//3-2-25
//Puse un event listener para ahorrar tiempo en el input
window.addEventListener("keydown",(e)=> {
    if (e.keyCode === 13) {
        agregarAmigo();
    }
})


let participantes = [];
let amigos = [];

function agregarAmigo() {
    var nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, ingrese un nombre.");
        return;
    } else {
        participantes.push(nombre);
        amigos.push(nombre);
        console.log(participantes);
        document.getElementById("amigo").value = "";
    }
    mostrarListaAmigos(participantes);
    console.log(amigos)
}

function mostrarListaAmigos(lista) {
    for (let i = 0; i < lista.length; i++) {
        var list = document.getElementById("listaAmigos");
        var new_li = document.createElement("li");
        new_li.innerHTML = lista[i];
        list.appendChild(new_li);
        lista[i] = "";
} }

function sortearAmigo() {
    if (participantes.length == 0) {
        alert("Por favor, ingresa almenos un amigo.");
        return;
    } else {
        var Randomizer = Math.floor(Math.random()*participantes.length);
        console.log(amigos[Randomizer]);
        let Resultado = document.querySelector("#resultado");
        Resultado.innerHTML = amigos[Randomizer];
    }
}