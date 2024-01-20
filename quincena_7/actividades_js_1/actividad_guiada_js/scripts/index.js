let primerValor = prompt("Introduce el primer valor", 0);
let segundoValor = prompt("Introduce el segundo valor", 0);
let tercerValor = prompt("Introduce el tercer valor", 0);

console.log("ANTES DE LA CONVERSIÓN");
console.log(primerValor, segundoValor, tercerValor);

primerValor = Number(primerValor);
segundoValor = Number(segundoValor);
tercerValor = Number(tercerValor);

console.log("DESPUÉS DE LA CONVERSIÓN");
console.log(primerValor, segundoValor, tercerValor);

let media = (primerValor + segundoValor + tercerValor) / 3;
alert("La media de los números es: " + media);
let mayor = Math.max(primerValor, segundoValor, tercerValor);
alert("El mayor número es: " + mayor);
let menor = Math.min(primerValor, segundoValor, tercerValor);
alert("El menor número es: " + menor);