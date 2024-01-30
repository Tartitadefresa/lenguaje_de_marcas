const inventario = []

agregarProducto({ nombre: 'Ordenador', precio: 1000, cantidad: 10 })
agregarProducto({ nombre: 'Mouse', precio: 100, cantidad: 100 })
agregarProducto({ nombre: 'Teclado', precio: 200, cantidad: 50 })

actualizarProducto('Mouse')

mostrarInventario()

function agregarProducto(producto) {
    if (
        !'nombre' in producto || 
        !'precio' in producto || 
        !'cantidad' in producto
    ) {
        console.error('El producto no tiene todos los atributos necesarios')
        return
    }

    inventario.push(producto)
}

function actualizarProducto(nombreProducto) {
    const producto = inventario.find(producto => producto.nombre === nombreProducto)

    if (!producto) {
        console.error('El producto no existe')
        return
    }

    const nuevoPrecio = prompt('Ingrese el nuevo precio')
    const nuevaCantidad = prompt('Ingrese la nueva cantidad')

    producto.precio = Number(nuevoPrecio)
    producto.cantidad = Number(nuevaCantidad)
}

function mostrarInventario() {
    if (inventario.length === 0) {
        console.log('No hay productos en el inventario')
        return
    }

    for (producto of inventario) {
        console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio} Cantidad: ${producto.cantidad}`)
    }
}

