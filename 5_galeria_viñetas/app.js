const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})


const escenas = document.querySelectorAll(".escena");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");
const miniaturas = document.querySelectorAll(".miniaturas img");
let indice = 0;

/* console.log(escenas);
console.log(escenas[1]); */
function mostrarEscena(i) {
 /*    console.log (escenas [i]) */
    for (let j = 0; j< escenas.length; j++) {
        escenas[j].classList.remove("activa");
    }
    escenas[i].classList.add("activa");
    indice = i;
}


/* boton siguiente */
btnSiguiente.addEventListener("click", function() {
    indice = indice + 1
    if (indice >= escenas.length) {
        indice = 0;
    }
    mostrarEscena(indice);
})

/* boton anterior */
btnAnterior.addEventListener("click", function() {
    indice = indice - 1
    if (indice < 0) {
        indice= escenas.length -1
    }
    mostrarEscena(indice);
})

/* MINIATURAS */
miniaturas.forEach(function(miniatura, i) {
    miniatura.addEventListener("click", function() {
        console.log("Miniatura " + i + " clickeada");
        mostrarEscena(i);
    })
})
const audios = [
    document.getElementById("audio1"),
    document.getElementById("audio2"),
    document.getElementById("audio3")
];

let audioActivo = null;
let sonidoReproduciendo = false;

function reproducirSonidoEscena(i) {
    // Detener audio anterior si existe
    if (audioActivo) {
        audioActivo.pause();
        
    }
    if (sonidoReproduciendo) {
        audioActivo = audios[i];
        audioActivo.play();
    }
}

// Modificar función mostrarEscena para activar sonido
const funcionOriginal = mostrarEscena;
mostrarEscena = function(i) {
    funcionOriginal(i);
    reproducirSonidoEscena(i);
};

// Botón Play/Stop
const btnPlayStop = document.getElementById("play-stop-img3");
btnPlayStop.addEventListener("click", function () {
    sonidoReproduciendo = !sonidoReproduciendo;
    btnPlayStop.textContent = sonidoReproduciendo ? "Stop" : "Play";

    if (sonidoReproduciendo) {
        reproducirSonidoEscena(indice);
    } else if (audioActivo) {
        audioActivo.pause();
    }
});
