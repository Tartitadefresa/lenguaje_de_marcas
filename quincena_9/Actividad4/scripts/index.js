function toggleSeccion(seccion) {
    const seccionSeleccionada = document.getElementById(seccion)
    const enlaces = document.getElementsByTagName('a')
    const enlace = Array.from(enlaces).find(e => e.href.includes(seccion))

    if (seccionSeleccionada.classList.contains('seccion-oculta')) {
        seccionSeleccionada.classList.remove('seccion-oculta')
        enlace.innerHTML = `Ocultar ${seccion}`
    } else {
        seccionSeleccionada.classList.add('seccion-oculta')
        enlace.innerHTML = `Mostrar ${seccion}`
    }
}

