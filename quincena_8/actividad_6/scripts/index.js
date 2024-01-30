let estudiantes = [
    { nombre: "Natalia", edad: 20, promedio: 90, cursos: ["Historia", "Lengua"] },
    { nombre: "Óscar", edad: 26, promedio: 75, cursos: ["Informática", "Valenciano"] },
    { nombre: "Belén", edad: 19, promedio: 80, cursos: ["Plástica", "Educación Física"] },
    { nombre: "María", edad: 21, promedio: 70, cursos: ["Historia", "Matemáticas"] }, 
    { nombre: "Raúl", edad: 27, promedio: 35, cursos: ["Física", "Informática"] }
];

console.log(calcularPromedioGeneral())
console.log(filtrarEstudiantesAprobados())
console.log(encontrarEstudiante("Raúl"))

function calcularPromedioGeneral() {
    let promedioGeneral = 0

    for (let i = 0; i < estudiantes.length; i++) {
        promedioGeneral += estudiantes[i].promedio
    }

    promedioGeneral = promedioGeneral / estudiantes.length

    return promedioGeneral
}

function filtrarEstudiantesAprobados() {
    return estudiantes.filter(estudiante => estudiante.promedio >= 80)

}

function encontrarEstudiante(nombre) {
    return estudiantes.find(estudiante => estudiante.nombre === nombre)
}