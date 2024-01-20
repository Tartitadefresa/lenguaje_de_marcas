let nombreUsuario = prompt("Ingrese su nombre");
alert("¡Hola," + nombreUsuario + "! Bienvenid@ al programa interactivo.");

let quiereActualizar = confirm("¿Le gustaría recibir actualizaciones del programa?");
if (quiereActualizar == true) {
    alert("¡Gracias por su respuesta! Recibirá actualizaciones del programa.");
} else {
    alert("¡Gracias por su respuesta! No recibirá actualizaciones del programa.");
}