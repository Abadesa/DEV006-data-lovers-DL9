/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function buscarPorName() {
  // Obtén el valor del input de búsqueda
  const name = document.getElementById("inputNombre").value;
  
  // Realiza una solicitud a la API usando fetch
  fetch("https://rickandmortyapi.com/api/character/?name=" + name)
    .then(function(response) {
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud: " + response.status);
      }
    })
    .then(function(data) {
      // Limpia el div de resultado de búsqueda
      document.getElementById("resultadoBusqueda").innerHTML = "";

      // Itera a través de los resultados de la API
      data.results.forEach(function(personaje, index) {
        // Crea un contenedor para mostrar la información del personaje
        const contenedor = document.createElement("div");
        contenedor.className = "personaje-container"; // Agrega una clase CSS para aplicar estilo
  
        // Crea un elemento de imagen para mostrar la imagen del personaje
        const imagen = document.createElement("img");
        imagen.src = personaje.image;
        imagen.alt = "Imagen de " + personaje.name;
        
        // Aplica el estilo de ancho y alto al 25% del tamaño original
        imagen.style.width = "100%";
        contenedor.appendChild(imagen);
  
        // Crea un elemento de párrafo para mostrar el nombre del personaje
        const parrafo = document.createElement("p");
        parrafo.textContent = personaje.name;
        parrafo.className = "nombre-personaje"; // Agrega la clase CSS "nombre-personaje"
        contenedor.appendChild(parrafo);

        // Añadir evento de clic al elemento de párrafo
        parrafo.addEventListener("click", function() {
          abrirDetallesPersonaje(personaje);
        });

        // Añadir evento de hover al elemento de párrafo
        parrafo.addEventListener("mouseover", function() {
          parrafo.style.textDecoration = "underline"; // Aplica el estilo de hover
        });

        // Añadir evento de mouseout al elemento de párrafo para quitar el estilo de hover cuando el ratón salga del nombre del personaje
        parrafo.addEventListener("mouseout", function() {
          parrafo.style.textDecoration = "none"; // Quita el estilo de hover
        });
  
        // Añadir evento de clic al elemento de párrafo
        parrafo.addEventListener("click", function() {
          abrirDetallesPersonaje(personaje);
        });

        // Definir la función para abrir los detalles del personaje en una nueva pestaña
        function abrirDetallesPersonaje(personaje) {
          // Construir la URL con los detalles del personaje
          const urlDetallesPersonaje = "detalles-personaje.html?" +
    "imagen=" + encodeURIComponent(personaje.image) +
    "&nombre=" + encodeURIComponent(personaje.name) +
    "&status=" + encodeURIComponent(personaje.status) +
    "&location=" + encodeURIComponent(personaje.location.name) +
    "&gender=" + encodeURIComponent(personaje.gender) +
    "&nombreCapitulo=" + encodeURIComponent(personaje.episode[0]); // Suponiendo que el primer episodio es suficiente

          // Abrir la página "detalles-personaje.html" en una nueva ventana del navegador
          window.open(urlDetallesPersonaje, "_blank", "width=600,height=700");
        }

        // Agrega el contenedor al div de resultado de búsqueda
        document.getElementById("resultadoBusqueda").appendChild(contenedor);
      });
  
      // Muestra el recuadro después de la búsqueda
      document.getElementById("resultadoBusqueda").style.display = "grid";
      // Configura el estilo de cuadrícula con 5 columnas y ajusta el espacio entre los elementos
      document.getElementById("resultadoBusqueda").style.gridTemplateColumns = "repeat(6, 1fr)";
      document.getElementById("resultadoBusqueda").style.gap = "10px";
    })
    .catch(function(error) {
      // Muestra un mensaje de error si algo sale mal
      document.getElementById("resultadoBusqueda").innerHTML = "Error: " + error.message;
  
      // Oculta el recuadro en caso de error
      document.getElementById("resultadoBusqueda").style.display = "none";
    });
}

// Obtener el personaje de la URL de la página
const urlParams = new URLSearchParams(window.location.search);
const imagenPersonaje = urlParams.get('imagen');
const nombrePersonaje = urlParams.get('nombre');
const statusPersonaje = urlParams.get('status');
const locationPersonaje = urlParams.get('location');
const genderPersonaje = urlParams.get('gender');
const nombreCapituloPersonaje = urlParams.get('nombreCapitulo');

// Actualizar los elementos HTML con los datos del personaje
document.getElementById('imagenPersonaje').src = imagenPersonaje;
document.getElementById('nombrePersonaje').textContent = nombrePersonaje;
document.getElementById('statusPersonaje').textContent = 'Status: ' + statusPersonaje;
document.getElementById('locationPersonaje').textContent = 'Location: ' + locationPersonaje;
document.getElementById('genderPersonaje').textContent = 'Gender: ' + genderPersonaje;
document.getElementById('nombreCapituloPersonaje').textContent = 'First Episode: ' + nombreCapituloPersonaje;


  