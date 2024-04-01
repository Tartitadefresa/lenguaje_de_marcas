const coordenadas = document.getElementById('coordenadas');

function mostrarCoordenadas(event) {
    const x = event.clientX;
    const y = event.clientY;
    coordenadas.textContent = `Posicion del raton: (${x}, ${y})`;
}

function mostrarAlerta(event) {
    const x = event.clientX;
    const y = event.clientY;

    const mousePosition = document.getElementById('mousePosition');
    mousePosition.style.position = 'fixed';
    mousePosition.style.left = `${x}px`;
    mousePosition.style.top = `${y}px`;
    alert(`Has hecho doble click en la posición (${x}, ${y}) de la pantalla`);
}

document.addEventListener('mousemove', mostrarCoordenadas);

document.addEventListener('dblclick', mostrarAlerta);