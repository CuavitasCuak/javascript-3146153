//Paso 1: Captura de variables

const pantalla = document.getElementById("miImagen"); // Captura de la imagen
  const btnBN = document.getElementById("btnBN"); // Captura del botón 1
  const btnBlur = document.getElementById("btnBlur"); // Captura del botón 2
  const btnZoom = document.getElementById("btnZoom"); // Captura del botón 3

//Paso 2: Funciones

function blancoYNegro() {
  console.log("Imagen modificada")
  pantalla.style.filter = "grayscale(100%)"; // Aplica el filtro de escala de grises a la imagen
  /* btnBN.style.backgroundColor = "blueviolet" // Cambia el color de fondo del botón 1
  btnBN.style.color = "white"; // Cambia el color del texto del botón 1
  btnBN.style.height = "200px"; // Cambia la altura del botón 1
  btnBN.style.borderRadius = "50%"; // Cambia el ancho del botón 1 */
}

function desenfocar () {
  console.log("Imagen modificada")
  pantalla.style.filter ="blur(5px) "
   
}

function zoom () {
  console.log("Imagen modificada")
  pantalla.style.transform = "scale(1.1) rotate(8deg)" ; // Aplica un zoom a la imagen
}
 
//Paso 3: Eventos

btnBN.addEventListener("click", blancoYNegro); // Evento para el botón 1 

btnBlur.addEventListener("click", desenfocar); // Evento para el botón 2

btnZoom.addEventListener("click", zoom); // Evento para el botón 3