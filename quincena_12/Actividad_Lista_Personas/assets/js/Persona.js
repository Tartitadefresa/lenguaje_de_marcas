class Persona {
    #nombre;
    #apellidos;
    #edad;
    #imagen;

    constructor(nombre, apellidos, edad) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
    }

    setImagen(imagen) {
        this.#imagen = imagen;
    }

    getPersonaHtml() {
        return `
            <div class="person">
                <img src="${this.#imagen}" alt="${this.#nombre}">
                <h3>${this.#nombre} ${this.#apellidos}</h3>
                <p>Edad: ${this.#edad}</p>
            </div>
        `;
    }
}

export default Persona;