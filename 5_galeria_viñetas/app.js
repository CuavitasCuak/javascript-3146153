
const personajes = document.querySelector('.personaje');
const corazon = document.querySelectorAll(".heart");
const energys = document.querySelectorAll(".energy");
const contadorEnergia = document.querySelector("#contador-energia");
const contadorCorazones = document.querySelector("#contador-corazones");
const flecha = document.querySelector(".dere");
const flechaa = document.querySelector(".izqui");
const flechaaa = document.querySelector(".arriba");
const flechaaaa = document.querySelector(".abajo");
const audio1 = document.querySelector("#audio-1");
const EnergiaAudio = document.querySelector("#audio-3");
const corazonAudio = document.querySelector("#audio-2");
const Playstop = document.querySelector("#play-stop");
const background = document.querySelector("#audio-4");




let totalEnergia = 0;
let totalCorazones = 0;


function toggleAudioDos() {
    if (background.paused) {
        background.play();
        Playstop.textContent = "Stop";
    } else {
        background.pause();
        Playstop.textContent = "Play";
    }   

}

Playstop.addEventListener("click", toggleAudioDos)

function reproducirAudio() {
    audio1.play(); 
}


flecha.addEventListener("click", reproducirAudio)
flechaa.addEventListener("click", reproducirAudio)
flechaaa.addEventListener("click", reproducirAudio)
flechaaaa.addEventListener("click", reproducirAudio)
 


energys.forEach(function (energia) {
    
    energia.addEventListener("click", function () {
        energia.classList.add("energia");
        totalEnergia++;
        contadorEnergia.textContent = totalEnergia;
        EnergiaAudio.play();
       
    }) 
}) 


corazon.forEach(function (corazon) {
    
    corazon.addEventListener("click", function () {
        corazon.classList.add("energia");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
        corazonAudio.play();
       
    }) 
}) 

let posX = 180;
let posY = 240;



personajes.style.left = posX + 'px';
personajes.style.top = posY + 'px';

const paso = 15;





function detectar() {
    const personajeRect = personajes.getBoundingClientRect();

    
    document.querySelectorAll(".heart").forEach(cora => {
        const coraRect = cora.getBoundingClientRect();

        if (
            personajeRect.left < coraRect.right &&
            personajeRect.right > coraRect.left &&
            personajeRect.top < coraRect.bottom &&
            personajeRect.bottom > coraRect.top
        ) {
            // Colisión detectada
            cora.remove();
            totalCorazones++;
            contadorCorazones.textContent = totalCorazones;
            corazonAudio.play();
        }
    });


    document.querySelectorAll(".energy").forEach(energia => {
        const energiaRect = energia.getBoundingClientRect();

        if (
            personajeRect.left < energiaRect.right &&
            personajeRect.right > energiaRect.left &&
            personajeRect.top < energiaRect.bottom &&
            personajeRect.bottom > energiaRect.top
        ) {
            energia.remove();
            totalEnergia++;
            contadorEnergia.textContent = totalEnergia;
            EnergiaAudio.play();
        }
    });
}


function moverArriba() {
  posY -= paso;
  personajes.style.top = posY + 'px';
  detectar();
}

function moverAbajo() {
  posY += paso;
  personajes.style.top = posY + 'px';
  detectar();
}

function moverDerecha() {
  posX += paso; 
  personajes.style.left = posX + 'px';
  detectar();
}

function moverIzquierda() {
  posX -= paso;
  personajes.style.left = posX + 'px';
  detectar();
}



document.querySelector('.arriba').addEventListener('click', moverArriba);
document.querySelector('.abajo').addEventListener('click', moverAbajo);
document.querySelector('.dere').addEventListener('click', moverIzquierda); 
document.querySelector('.izqui').addEventListener('click', moverDerecha);    


//siguiente galeria
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const escena1 = document.querySelector('.escena-1');
const escena2 = document.querySelector('.escena-2');
const escena3 = document.querySelector('.escena-3');
let i = 1; 

next.addEventListener('click', function() {
    if(i ===1){
        escena1.classList.add('d-none');
        escena2.classList.remove('d-none');
        i++
    }
    else if(i === 2){
        escena2.classList.add('d-none');
        escena3.classList.remove('d-none');
        i++
    }   
})


prev.addEventListener('click', function() {
    if(i ===1){
        escena1.classList.add('d-none');
        escena3.classList.remove('d-none');
        i--
    }
    else if(i === 2){
        escena3.classList.add('d-none');
        escena2.classList.remove('d-none');
        i--
    }   
})
