function agregarPersona() {
    const tabla = document.getElementById("miTabla")
    const tBody = tabla.children[1]

    const input1 = document.getElementById("valorColumna1")
    const input2 = document.getElementById("valorColumna2")

    const trElement = document.createElement("tr")

    trElement.innerHTML = `<td>${input1.value}</td><td>${input2.value}</td>`
    tBody.append(trElement)
    
    input1.value = ""
    input2.value = ""
    
}