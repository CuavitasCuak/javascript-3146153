var imagen = document.getElementById("miImagen");
    var btnBN = document.getElementById("btnBN");
    var btnBlur = document.getElementById("btnBlur");
    var btnZoom = document.getElementById("btnZoom");

    var botones = [btnBN, btnBlur, btnZoom];

    function resetearImagen() {
      imagen.style.filter = "none";
      imagen.style.transform = "none";
    }

    function desactivarTodos() {
      for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("activo");
      }
    }

    btnBN.addEventListener("click", function() {
      resetearImagen();
      imagen.style.filter = "grayscale(100%)";
      desactivarTodos();
      btnBN.classList.add("activo");
    });

    btnBlur.addEventListener("click", function() {
      resetearImagen();
      imagen.style.filter = "blur(4px)";
      desactivarTodos();
      btnBlur.classList.add("activo");
    });

    btnZoom.addEventListener("click", function() {
      resetearImagen();
      imagen.style.transform = "scale(1) rotate(8deg)";
      desactivarTodos();
      btnZoom.classList.add("activo");
    });