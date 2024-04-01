export let promedioSalario = 'No calculado'
export const listEmpleados = []

export function agregarEmpleado() {
  const form = document.getElementById('form')
  const formData = new FormData(form)

  const empleado = {
    id: formData.get('id'),
    nombre: formData.get('nombre'),
    salario: formData.get('salario'),
    imagen: formData.get('imagen')
  }
  

  const findEmpleado = listEmpleados.find(e => e.nombre === empleado.nombre)

  if (findEmpleado) {
    return alert('El usuario ya existe')
  }

  listEmpleados.push(empleado)

  form.reset()
}

export function actualizarEmpleado() {
  const form = document.getElementById('form')
  const formData = new FormData(form)

  const findEmpleado = listEmpleados.find(e => e.nombre === formData.get('nombre'))

  findEmpleado.salario = formData.get('salario')
  findEmpleado.imagen = formData.get('imagen')
}

export function calcularPromedio() {
  listEmpleados.forEach((empleado, index) => {
    if (index === 0) {
      promedioSalario = parseInt(empleado.salario)
    } else {
      promedioSalario += parseInt(empleado.salario)
    }
    
  })

  console.log(promedioSalario)

  promedioSalario = promedioSalario / listEmpleados.length

  alert(promedioSalario)
}

export function buscarEmpleados() {
  const salario = prompt('Ingrese el salario a buscar')

  const empleados = listEmpleados.filter(e => e.salario >= parseInt(salario))

  alert(empleados.map(e => e.nombre))
}