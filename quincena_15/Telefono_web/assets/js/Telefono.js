class Telefono {
  #contactos;
  #llamadas;

  constructor() {
    this.#contactos = [];
    this.#llamadas = [];
  }

  agregarContacto(contacto) {
    let existeContacto = false;
    for (let index = 0; index < this.#contactos.length; index++) {
      const contactoSel = this.#contactos[index];
      if (
        contactoSel.getNombre().toLowerCase() ===
          contacto.getNombre().toLowerCase() ||
        contactoSel.getNumero() === contacto.getNumero()
      ) {
        console.log("Ya existe un contacto con el mismo nombre o teléfono");
        existeContacto = true;
        break;
      }
    }
    if (!existeContacto) {
      this.#contactos.push(contacto);
    }
  }

  buscarPorNombre(nombre) {
    for (let index = 0; index < this.#contactos.length; index++) {
      const contactoSel = this.#contactos[index];
      if (contactoSel.getNombre().toLowerCase() === nombre.toLowerCase()) {
        return contactoSel;
      }
    }
    console.log("No se ha encontrado un contacto con el nombre indicado");
    return null;
  }

  buscarPorNumero(numero) {
    for (let index = 0; index < this.#contactos.length; index++) {
      const contactoSel = this.#contactos[index];
      if (contactoSel.getNumero() === numero) {
        return contactoSel;
      }
    }
    console.log("No se ha encontrado un contacto con el número indicado");
    return null;
  }

  eliminarContacto(nombre) {
    let indiceAEliminar = -1;
    for (let index = 0; index < this.#contactos.length; index++) {
      const contactoSel = this.#contactos[index];
      if (contactoSel.getNumero() === numero) {
        indiceAEliminar = index;
      }
    }
    if (indiceAEliminar === -1) {
      console.log("No se ha encontrado un contacto con el número indicado");
      return;
    }
    this.#contactos.splice(indiceAEliminar, 1);
  }

  llamar(nombre) {
    let contactoALlamar = this.buscarPorNombre(nombre);
    if (contactoALlamar !== null) {
      this.#llamadas.push(
        `Llamada realizada a ${contactoALlamar.getNombre()} (${contactoALlamar.getNumero()})`
      );
    } else {
      console.log("No se ha encontrado un contacto con el nombre indicado");
    }
  }

  verContactos() {
    console.log("LISTADO DE CONTACTOS");
    for (let index = 0; index < this.#contactos.length; index++) {
      const contactoSel = this.#contactos[index];
      console.log(`- ${contactoSel.toString()}`);
    }
  }

  verHistorial() {
    console.log("LLAMADAS REALIZADAS");
    for (let index = 0; index < this.#llamadas.length; index++) {
      const llamadaSel = this.#llamadas[index];
      console.log(`- ${llamadaSel.toString()}`);
    }
  }
}

export { Telefono };

