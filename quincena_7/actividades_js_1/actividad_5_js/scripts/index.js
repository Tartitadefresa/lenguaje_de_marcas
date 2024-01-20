let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let suma = parseInt(numero1) + parseInt(numero2);

let salir = false;

do {
    alert("La suma de los números es: " + suma);
    let otraSuma = confirm("¿Desea realizar otra suma?");
    if (otraSuma == true) {
        numero1 = prompt("Ingrese un número");
        numero2 = prompt("Ingrese otro número");
        suma = parseInt(numero1) + parseInt(numero2);
    } else {
        salir = true;
    }
} while (!salir);