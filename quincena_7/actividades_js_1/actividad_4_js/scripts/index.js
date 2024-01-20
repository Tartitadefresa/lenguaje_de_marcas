let inicio = prompt("Ingrese el valor inicial del rango:");
let fin = prompt("Ingrese el valor final del rango:");

let sumaPares = 0;
let numero = parseInt(inicio);

while (numero <= parseInt(fin)) {
    if (numero % 2 === 0) {
        sumaPares += numero;
    }
    numero++;
}

alert("La suma total de los números pares es: " + sumaPares);

