// Obtener el id desde la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || 1;

// Buscar el capítulo en la BD
const capitulo = comic.capitulos.find(c => c.id === id) || comic.capitulos[0];

// Seleccionar elementos0
const nombreCap = document.getElementById("nombreCap");
const videoCapitulo = document.getElementById("videoCapitulo");
const btnAtras = document.getElementById("btnAtras");

// Mostrar datos
nombreCap.textContent = capitulo.nombreCap; //Inserta el nombre del capítulo como texto dentro del elemento
videoCapitulo.src = capitulo.video;  // Asigna el enlace del video al elemento
// Botón atrás → regresar al capítulo
btnAtras.addEventListener("click", () => { //// Añade un manejador que responde al clic del botón
  window.location.href = `capitulo.html?id=${capitulo.id}`; // Redirige a la página del capítulo correspondiente
});
