function agregarTarea() {
    const form = document.getElementById('taskForm')
    const formData = new FormData(form)

    const taskInput = formData.get('taskInput')
    if (taskInput === '') {
        alert('Debes ingresar una tarea')
        return
    }

    const taskImportant = formData.get('importantTask')

    const liElement = document.createElement('li')
    liElement.textContent = taskInput

    if (taskImportant === 'on') {
        liElement.classList.add('important')
    }

    const ulElement = document.getElementById('taskList')
    ulElement.appendChild(liElement)

    form.reset()
}

function completarTareas() {
    const list = document.getElementById('taskList')

    for (const element of list.children) {
        element.classList.add('completed')
    }
}

function eliminarTareas() {
    const list = document.getElementById('taskList')
    list.replaceChildren()
}

export {
    agregarTarea,
    completarTareas,
    eliminarTareas
}

