import { agregarTarea, completarTareas, eliminarTareas } from "./tareas.js"

function añadirListeners() {
    const buttonParaAgregar = document.getElementById('agregarTareaBtn')
    buttonParaAgregar.addEventListener('click', function() {
        agregarTarea()
    })

    const buttonParaCompletar = document.getElementById('clearBtn')
    buttonParaCompletar.addEventListener('click', function() {
        completarTareas()
    })

    const buttonParaEliminar = document.getElementById('deleteBtn')
    buttonParaEliminar.addEventListener('click', function() {
        eliminarTareas()
    })
}


añadirListeners()