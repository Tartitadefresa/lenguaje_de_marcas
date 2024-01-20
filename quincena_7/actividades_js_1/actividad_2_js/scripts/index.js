let numeroSecreto = Math.floor(Math.random() * 5) + 1;

let numeroIngresado = prompt("Ingrese un número");

if (numeroSecreto == numeroIngresado) {
    alert("¡Felicitaciones! Adivinaste el número secreto.");
} else {
    alert("Lo siento, no adivinaste el número secreto.");
    let quiereIntentar = confirm("¿Desea intentarlo nuevamente?");
    if (quiereIntentar == true) {
        let numeroIngresado = prompt("Ingrese un número");
        if (numeroSecreto == numeroIngresado) {
            alert("¡Felicitaciones! Adivinaste el número secreto.");
        } else {
            alert("Lo siento, no adivinaste el número secreto.");
        }
    } else {
        alert("¡Gracias por jugar!");
    }
}
