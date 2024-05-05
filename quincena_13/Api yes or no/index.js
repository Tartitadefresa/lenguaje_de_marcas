const button = document.getElementById('btn')

button.addEventListener('click', () => {
    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.getElementById('contenedorImg')
            imgContainer.innerHTML = `<img src="${data.image}" alt="imagen de respuesta">`
            
        })
        .catch(error => console.error(error))
})