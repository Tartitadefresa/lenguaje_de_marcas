let numeroIteraciones = prompt("Ingrese el número de iteraciones");
let suma = 0;

for (let i = 1; i <= numeroIteraciones; i++) {
    console.log(i);
    suma += i;
}

console.log("La suma de los números es: " + suma);
