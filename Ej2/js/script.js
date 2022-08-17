// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "https://dog.ceo/api/breeds/image/random"; // URL que contiene los datos que queremos mostrar (necesitamos acceder al campo "message")

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él
const btnAddImage = document.getElementById("btnAddImage"); // "Traemos" utilizando el DOM el botón de id "btnAddImage" para asociarle un "escuchador de eventos" para el "click" del usuario

/**
 * Función que recibe por parámetro un String con la URL de una imagen y
 * agrega esta imagen al div de id "container"
 */
function addImage(imgURL) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<img src="${imgURL}"/>`; // Se concatena cada imagen al innerHTML del contenedor
}

// Escribe el código necesario para añadir el evento click al botón que permita agregar perros al div de id "container"

btnAddImage.addEventListener("click", function (e) {
    fetch(DATA_URL)
        .then((res) => res.json())
        .then((data) => addImage(data.message));
});
