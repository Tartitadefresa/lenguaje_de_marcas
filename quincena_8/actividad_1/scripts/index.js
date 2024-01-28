function generarSecuenciaMultiplicativa(cantidadElementos, valorInicial) {
    if (cantidadElementos <= 0) {
        console.log("La cantidad de elementos debe ser mayor que 0")
        return
    }

    for (let i = 0; i < cantidadElementos; i++) {
        console.log(valorInicial)
        valorInicial *= 2
    }
}