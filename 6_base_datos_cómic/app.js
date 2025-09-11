const tituloComic = document.querySelector(".titulo-comic")
const descripcionComic = document.querySelector(".descripcion-comic")
const imgComic = document.querySelector(".img-comic")
const listaCaps = document.querySelector(".episodios-container")


tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion


comic.capitulos.forEach(cap => {
  const div = document.createElement("div")
  div.classList.add("episodio")
  div.innerHTML = `
    <p class="nombre-cap">${cap.nombreCap}</p>
    <img src="${cap.imgPortada}" width="150" alt="">
    <p class="descripcion-cap">${cap.descripcion}</p>
  `
    
  listaCaps.appendChild(div);
});
