//Listado de animales con 4 propiedades: nombre, tipo, edad y color
let listadoAnimales = [];

function agregarAnimal() {
    let nombreAnimal = document.getElementById('nombre').value;
    let edadAnimal = document.getElementById('edad').value;
    let tipoAnimal = "";
    
    let listaRadioBtn = document.getElementsByName("tipoAnimal")

    for(let index = 0; index < listaRadioBtn.length; index++) {
        const radioSel = listaRadioBtn[index];
        if (radioSel.checked === true) {
            tipoAnimal = radioSel.value
            break;
        }
    }
    
    let selectColor = document.getElementById('color').value;


    let animal = {
        nombre: nombreAnimal,
        tipo: tipoAnimal,
        edad: edadAnimal,
        color: selectColor,
    };

    listadoAnimales.push(animal);
}

function eliminarAnimales() {
    listadoAnimales = [];
}

function refrescarListadoAnimales() {
    let animalList = document.getElementById("animal-list")
    animalList.innerHTML = "";
    listadoAnimales.forEach((animalSel) => {
        let divCard = document.createElement("div");
        divCard.classList.add("card");

        let emojiAnimal = getEmojiAnimal(animalSel);

        divCard.innerHTML = `
            <div class="animal-logo">${emojiAnimal}</div>
            <div class="animal-name">Nombre del Animal: ${animalSel.nombre}</div>
            <div class="animal-info">Tipo: ${animalSel.tipo}</div>
            <div class="animal-info">Edad: ${animalSel.edad}</div>
            <div class="animal-info">Color: ${animalSel.color}</div>
        `;
        animalList.appendChild(divCard);
    })
}

function getEmojiAnimal(animal) {
    switch(animal.tipo) {
        case "Gato":
            return "🐱";
        case "Ave":
            return "🦜";
        default:
            return "🐾";
    }
}

function eliminarAnimalesClick() {
    eliminarAnimales();
    refrescarListadoAnimales();
}

function AnyadirAnimalesClick() {
    agregarAnimal();
    refrescarListadoAnimales();
}

function anyadirGestionEventos() {
    let btnEliminar = document.getElementById("eliminarTodosBtn");
    btnEliminar.addEventListener("click", eliminarAnimalesClick);

    let btnAnyadir = document.querySelector("button[type='submit']");
    btnAnyadir.addEventListener("click", AnyadirAnimalesClick);
}

anyadirGestionEventos();

