import * as gestion from './gestionEmpleados.js'

function refrescarPantalla() {
  const tableBody = document.getElementById('tableBody')

  tableBody.innerHTML = ''

  gestion.listEmpleados.forEach(empleado => {
    const row = document.createElement('tr')
    const id = document.createElement('td')
    const nombre = document.createElement('td')
    const salario = document.createElement('td')
    const imagen = document.createElement('td')

    id.innerText = empleado.id
    nombre.innerText = empleado.nombre
    salario.innerText = empleado.salario
    imagen.innerHTML = empleado.imagen

    row.appendChild(id)
    row.appendChild(nombre)
    row.appendChild(salario)
    row.appendChild(imagen)

    tableBody.appendChild(row)
  })
}

function añadirListeners() {
  const addButton = document.getElementById('agregarEmpleado')
  const updateButton = document.getElementById('actualizarEmpleado')
  const averageButton = document.getElementById('calcularPromedio')
  const searchButton = document.getElementById('buscarEmpleado')

  addButton.addEventListener('click', function() {
    gestion.agregarEmpleado()
    refrescarPantalla()
  })

  updateButton.addEventListener('click', function() {
    gestion.actualizarEmpleado()
    refrescarPantalla()
  })

  averageButton.addEventListener('click', function() {
    gestion.calcularPromedio()
  })

  searchButton.addEventListener('click', function() {
    gestion.buscarEmpleados()
  })
}

añadirListeners()