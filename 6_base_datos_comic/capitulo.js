// Obtener id del capítulo desde la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || 1;

// Buscar capítulo en la base de datos
const capitulo = comic.capitulos.find(capi => capi.id === id) || comic.capitulos[0];

// Selección de elementos del HTML
const principal = document.querySelector(".principal");
const nombre = document.querySelector(".nombre");
const cap = document.querySelector(".cap");
const descrip = document.querySelector(".descrip");

// Mostrar la información del capítulo seleccionado
principal.src = capitulo.imgPortada; //// Cambia la imagen principal a la portada del capítulo seleccionado
nombre.textContent = capitulo.nombreCap;
cap.textContent = `Capítulo ${capitulo.id}`; //// Muestra el número del capítulo en formato
descrip.textContent = capitulo.descripcion;

// Reemplazar los capítulos disponibles en la parte inferior del HTML
const listaCapitulos = document.querySelector(".capitulos");
listaCapitulos.innerHTML = ""; // // innerHTML borra o cambia el contenido de un elemento


// Generar la lista de capítulos dinámicamente

comic.capitulos.forEach(capi => {
 /*  va agregando cada capítulo uno debajo del otro .*/ 
    listaCapitulos.innerHTML += `  
    <a href="./capitulo.html?id=${capi.id}">
      <img class="capitulo${capi.id}" src="${capi.imgPortada}" alt="Capítulo ${capi.id}">
      <h1 class="textoCap${capi.id}">Capítulo ${capi.id}</h1>
    </a>
  `;
});

// Botón Play → abrir un HTML nuevo con el video del capítulo
const playBtn = document.querySelector(".play-btn"); // Obtiene el botón con clase "play-btn"
playBtn.addEventListener("click", () => {
  window.location.href = `video.html?id=${capitulo.id}`; //  // Cuando se presiona, redirige a la página video.html con el id del capítulo
});
