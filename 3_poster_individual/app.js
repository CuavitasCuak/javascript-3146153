
const personajes = document.querySelector('.personaje');
const corazon = document.querySelectorAll(".heart");
const energys = document.querySelectorAll(".energy");
const contadorEnergia = document.querySelector("#contador-energia");
const contadorCorazones = document.querySelector("#contador-corazones");

console.log(contadorEnergia, personajes, corazon, energys, contadorCorazones);

let totalEnergia = 0;
let totalCorazones = 0;

energys.forEach(function (energia) {
    
    energia.addEventListener("click", function () {
        energia.classList.add("energia");
        totalEnergia++;
        contadorEnergia.textContent = totalEnergia;
       
    }) 
}) 


corazon.forEach(function (corazon) {
    
    corazon.addEventListener("click", function () {
        corazon.classList.add("energia");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
       
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
