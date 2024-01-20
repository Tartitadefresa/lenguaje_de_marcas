let cadenaTexto = prompt("Ingrese una cadena de texto:");
let opcion = "";

while (opcion !== "8") {
    opcion = prompt(`Menú:
    1. Obtener la longitud de la cadena.
    2. Convertir la cadena a mayúsculas.
    3. Convertir la cadena a minúsculas.
    4. Extraer una porción de la cadena.
    5. Reemplazar una palabra en la cadena.
    6. Concatenar otra cadena al final.
    7. Separar la cadena en palabras.
    8. Salir del programa.`);

    switch (opcion) {
        case "1":
            alert("La longitud de la cadena es: " + cadenaTexto.length);
            break;
        case "2":
            alert("La cadena en mayúsculas es: " + cadenaTexto.toUpperCase());
            break;
        case "3":
            alert("La cadena en minúsculas es: " + cadenaTexto.toLowerCase());
            break;
        case "4":
            let inicio = parseInt(prompt("Ingrese el índice de inicio:"));
            let fin = parseInt(prompt("Ingrese el índice de fin:"));
            alert("La porción de la cadena es: " + cadenaTexto.slice(inicio, fin));
            break;
        case "5":
            let palabraAntigua = prompt("Ingrese la palabra a reemplazar:");
            let palabraNueva = prompt("Ingrese la nueva palabra:");
            cadenaTexto = cadenaTexto.replace(palabraAntigua, palabraNueva);
            alert("La cadena modificada es: " + cadenaTexto);
            break;
        case "6":
            let cadenaAdicional = prompt("Ingrese la cadena adicional:");
            cadenaTexto += cadenaAdicional;
            alert("La cadena concatenada es: " + cadenaTexto);
            break;
        case "7":
            let palabras = cadenaTexto.split(" ");
            alert("Las palabras de la cadena son: " + palabras.join(", "));
            break;
        case "8":
            alert("Salir");
            break;
        default:
            alert("Opción inválida. Por favor, ingrese un número del 1 al 8.");
            break;
    }
}

