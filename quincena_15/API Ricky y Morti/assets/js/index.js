async function consultaRickyMorty(event) {
    // Previene el comportamiento por defecto del formulario de recargar la página al enviar
    event.preventDefault();

    const searchInput = document.getElementById("searchInput").value; // Obtener el valor del texto introducido
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchInput)}`; // Construye un string con la URL de la API con el nombre del personaje buscado, asegurando que el valor esté codificado correctamente para URL

    try {
        const response = await fetch(url); // Realiza una solicitud asíncrona a la API de Rick and Morty
        const data = await response.json(); // Convierte la respuesta de la API a un objeto JSON
        const charactersContainer = document.getElementById("charactersContainer"); // Obtiene el contenedor donde se mostrarán los personajes

        charactersContainer.innerHTML = ''; // Vacía el contenido html de charactersContainer

        if (data.results && data.results.length > 0) { // Si existen resultados en la respuesta de la llamada a la api
            // Recorre todos los elementos de data.results y por cada uno, añade a charactersContainer un div con el contenido del personaje
            data.results.forEach(elemento => {
                charactersContainer.innerHTML += `
                    <div class="character">
                        <h2>${elemento.name}</h2>
                        <img src="${elemento.image}" alt="${elemento.name}">
                        <p>Estado: ${elemento.status}</p>
                        <p>Especie: ${elemento.species}</p>
                    </div>
                `;
            });
        } else {
            // Si no se encontraron resultados, muestra un mensaje apropiado en charactersContainer
            charactersContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        charactersContainer.innerHTML = '<p>Hubo un error al realizar la búsqueda. Inténtalo de nuevo más tarde.</p>';
    }
}

function gestionEventos() {
    let searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", consultaRickyMorty);
}

gestionEventos();