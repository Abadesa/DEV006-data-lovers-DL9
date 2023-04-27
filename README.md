# README - Rick y Morty API

Este es un proyecto que utiliza la API de Rick and Morty para buscar personajes por nombre, mostrar información sobre los personajes de la serie y mostrar sus detalles en una nueva página. 

## Requisitos

Para visualizar este proyecto necesitarás tener instalado:

- Un navegador web moderno (Chrome, Firefox, Edge, Safari, Opera, etc.)
- Acceso a Internet

## Cómo funciona

El proyecto consta de dos páginas: `index.html` y `detalles-personaje.html`. En la página de inicio, hay un campo de entrada de búsqueda donde se puede ingresar el nombre, apellido o iniciales del personaje a buscar. Cuando se envía la búsqueda, el proyecto hace una solicitud a la API de Rick and Morty utilizando `fetch` y muestra los resultados en una cuadrícula. 

Cada resultado de búsqueda muestra la imagen y el nombre del personaje. Al hacer clic en el nombre del personaje, se abre una nueva página (`detalles-personaje.html`) que muestra los detalles del personaje seleccionado, tales como su estatus, género, ubicación y capítulo en donde se realizó la primera aparición del personaje.

## Archivos

index.html: página web principal del proyecto.
detalles-personaje.html: ventana adicional que presenta todos los detalles del personaje seleccionado en la hoja anterior.
style.css: archivo de estilos para dar formato a la página web.
main.js: archivo de JavaScript que permite la búsqueda de personajes.
rickandmorty.json: archivo con la información de todos los personajes de la serie.

## Configuración

Para ejecutar este proyecto, simplemente abra el archivo `index.html` en su navegador web.

## Autor

Este proyecto ha sido desarrollado por Alicia Riquelme Herrera como un proyecto de prueba de la API de Rick y Morty.
