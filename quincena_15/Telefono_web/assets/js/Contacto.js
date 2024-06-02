class Contacto {
  #nombre;
  #numero;

  constructor(nombre, numero) {
    this.setNombre(nombre);
    this.setNumero(numero);
  }

  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getNumero() {
    return this.#numero;
  }
  setNumero(numero) {
    this.#numero = numero;
  }

  toString() {
    return `${this.#nombre} - ${this.#numero}`;
  }

  toHtml() {
    return `
    <div class="contact">
    <img src="./assets/images/profile-user-svgrepo-com.svg" alt="Profile" class="contact-image">
    <div>
      <div class="contact-name">${this.#nombre}</div>
      <div class="contact-phone">${this.#numero}</div>
    </div>
</div>
    `;
  }
}

export { Contacto };
