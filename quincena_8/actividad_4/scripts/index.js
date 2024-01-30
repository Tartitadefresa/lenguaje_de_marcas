function analizarPalabra(palabra, letra) {
    if (typeof palabra !== "string" || letra.length !== 1) {
        console.log("Error, no es una palabra o no es una letra");
        return;
    }
    palabra = palabra.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            contador++;
        }
    }
    console.log("La longitud de la palabra es: " + palabra.length)
    console.log("Cantidad de veces que aparece la letra " + "'" + letra + "'" + ": " + contador);
}