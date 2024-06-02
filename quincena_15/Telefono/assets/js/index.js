import { Telefono, Contacto } from './Telefono.js';

const telefono = new Telefono();

telefono.agregarContacto(new Contacto('Juan', '123456789'));
telefono.agregarContacto(new Contacto('María', '987654321'));
telefono.agregarContacto(new Contacto('Pedro', '456789123'));

console.log(telefono.verContactos());

telefono.eliminarContacto('María');

console.log(telefono.verContactos());

telefono.llamar('Juan');
telefono.llamar('Carlos');

console.log(telefono.verHistorial());

