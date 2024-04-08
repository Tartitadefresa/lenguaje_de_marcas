import Persona from './Persona.js';

const personas = [];

function anyadirListeners() {
    const form = document.getElementById('personForm');
    form.addEventListener('submit', crearPersona);
}

function crearPersona(event) {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const apellidos = document.getElementById('lastName').value;
    const edad = document.getElementById('age').value;
    const imagen = document.getElementById('image').value;

    const nuevaPersona = new Persona(nombre, apellidos, edad);
    nuevaPersona.setImagen(imagen);

    personas.push(nuevaPersona);

    event.target.reset();

    renderGallery();
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    personas.forEach(persona => {
        gallery.innerHTML += persona.getPersonaHtml();
    });
}

document.addEventListener('DOMContentLoaded', anyadirListeners);
