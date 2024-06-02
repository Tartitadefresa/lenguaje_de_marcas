class Contacto {
    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }
}

class Telefono {
    constructor() {
        this.contactos = [];
        this.llamadas = [];
    }

    agregarContacto(contacto) {
        if (!this.contactos.some(c => c.nombre === contacto.nombre || c.numero === contacto.numero)) {
            this.contactos.push(contacto);
            return true;
        }
        return false;
    }

    buscarPorNombre(nombre) {
        return this.contactos.find(contacto => contacto.nombre === nombre);
    }

    buscarPorNumero(numero) {
        return this.contactos.find(contacto => contacto.numero === numero);
    }

    eliminarContacto(nombre) {
        const indice = this.contactos.findIndex(contacto => contacto.nombre === nombre);
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            return true;
        }
        return false;
    }

    llamar(nombre) {
        const contacto = this.buscarPorNombre(nombre);
        if (contacto) {
            this.llamadas.push(`Llamada a ${nombre} con número ${contacto.numero} realizada`);
            return true;
        }
        return false;
    }

    verContactos() {
        let resultado = 'Lista de contactos:\n';
        this.contactos.forEach(contacto => {
            resultado += `Nombre: ${contacto.nombre}, Número: ${contacto.numero}\n`;
        });
        return resultado;
    }

    verHistorial() {
        return this.llamadas.join('\n');
    }
}

export { Telefono, Contacto };