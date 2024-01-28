const numeros = []

while (numeros.length < 5) {
    const numero = prompt("Introduce un número par")

    if (numero % 2 === 0) {
        numeros.push(numero)
    } else {
        alert("El número introducido no es par")
    }

}

function mostrarNumeros() {
    console.log(numeros)
}

function duplicarNumeros() {
    const numerosMultiplicados = numeros.map(n => n*2)
    console.log(numerosMultiplicados) 
}