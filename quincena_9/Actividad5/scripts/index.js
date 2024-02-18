const elemento = document.getElementById("miElemento")
elemento.addEventListener("mouseenter", function() {
    cambiarColor()
})

elemento.addEventListener("mouseleave", function() {
    resturarColor()
})

elemento.addEventListener("click", function() {
    tamaño()
})

function cambiarColor() {
    elemento.style.backgroundColor = 'pink'
}

function resturarColor() {
    elemento.style.backgroundColor = 'lightblue'
}

function tamaño() {
    elemento.style.width = '400px'
    elemento.style.height = '300px'
}