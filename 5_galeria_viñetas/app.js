
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

//Galeria 

const escenas = document.querySelectorAll(".escena");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");
const miniaturas = document.querySelectorAll(".miniaturas img");
let indice = 0;

function mostrarEscena(i) {
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa");
        
    }
    escenas[i].classList.add("activa");

    indice = i;
}

//boton siguiente

btnSiguiente.addEventListener("click", function() {
    indice ++;
    if (indice >= escenas.length) {
        indice = 0;
    }

    mostrarEscena(indice);
})

btnAnterior.addEventListener("click", function() {
    indice --;
    if (indice < 0) {
        indice = escenas.length - 1;
    }

    mostrarEscena(indice);
})

miniaturas.forEach(function(miniatura, i) {
    miniatura.addEventListener("click", function() {
        mostrarEscena(i);
    })
})

const audio1 = document.querySelector(".audio-escena");
const Playstopimg1 = document.querySelector(".btn-audio");

Playstopimg1.addEventListener("click", function() {
    if (audio1.paused) {
        audio1.play();
        Playstopimg1.textContent = "⏸️";
    } else {
        audio1.pause();
        Playstopimg1.textContent = "▶️";
    }
});


const audio2 = document.querySelector(".audio-escena-2");
const Playstopimg2 = document.querySelector(".btn-audio-2");

Playstopimg2.addEventListener("click", function() {
    if (audio2.paused) {
        audio2.play();
        Playstopimg2.textContent = "⏸️";
    } else {
        audio2.pause();
        Playstopimg2.textContent = "▶️";
    }
});


const audio0 = document.querySelector(".audio-escena-1");
const Playstopimg0 = document.querySelector(".btn-audio-1");

Playstopimg0.addEventListener("click", function() {
    if (audio0.paused) {
        audio0.play();
        Playstopimg0.textContent = "⏸️";
    } else {
        audio0.pause();
        Playstopimg0.textContent = "▶️";
    }
});