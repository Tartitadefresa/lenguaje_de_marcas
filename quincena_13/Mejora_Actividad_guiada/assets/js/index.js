import { Personaje } from "./Personaje.js";

const API_HARRY_POTTER = "https://hp-api.onrender.com/api/characters";
let listadoPersonajesTable = document.getElementById("listadoPersonajes");
let listadoPersonajesTbody =
 listadoPersonajesTable.getElementsByTagName("tbody")[0];
const loader = document.getElementById("loader");

async function obtenerJSONInfoPersonajes() {
    return fetch(API_HARRY_POTTER)
      .then((res) => {
        return res.json();
      })
      .then((jsonPersonajes) => {
        let listadoPersonajes = [];
        jsonPersonajes.forEach((personajeSel) => {
          let nuevoPersonaje = Personaje.fromJson(personajeSel);
          listadoPersonajes.push(nuevoPersonaje);
        });
        return listadoPersonajes;
      });
   }

function pintarFilasPersonajes(listadoPersonajes) {
    for (let index = 0; index < listadoPersonajes.length; index++) {
      const personajeSel = listadoPersonajes[index];
      listadoPersonajesTbody.innerHTML += personajeSel.getHtmlCard();
    }
   }

addEventListener("DOMContentLoaded", (event) => {
    obtenerJSONInfoPersonajes().then((listadoPersonajes) => {
      pintarFilasPersonajes(listadoPersonajes);
      loader.style.display = "none";
      listadoPersonajesTable.style.display = "block";

    });
   });