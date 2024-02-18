function añadirElemento() {
    const input = document.getElementById("textoAInsertar")

    const lista = document.getElementsByTagName("ul")[0]

    const nuevo = document.createElement("li")
    nuevo.append(input.value)
    
    lista.append(nuevo)

    input.value = ""

}
