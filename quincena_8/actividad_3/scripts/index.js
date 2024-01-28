const numeroDNI = prompt("Introduce su número de DNI sin la letra")
const numeroDNIInt = parseInt(numeroDNI)

if (isNaN(numeroDNIInt) || numeroDNI.length < 8 || numeroDNIInt < 0) {
    alert("Valor no válido")
} else {
    calcularLetraDNI(numeroDNIInt)
}


function calcularLetraDNI(numeroDNI) {
    const letras = {
        0: 'T', 1: 'R', 2: 'W', 3: 'A', 4: 'G', 5: 'M', 6: 'Y', 7: 'F', 8: 'P', 9: 'D', 10: 'X', 11: 'B', 12: 'N', 13: 'J', 14: 'Z', 15: 'S', 16: 'Q', 17: 'V', 18: 'H', 19: 'L', 20: 'C', 21: 'K', 22: 'E'
    }

    const resto = numeroDNI % 23
    const letra = letras[resto]

    alert(`El DNI con letra seria: ${numeroDNI}-${letra}`)
}