const peliculas = document.getElementsByTagName('ol')[0].getElementsByTagName('li');

for (let i = 0; i < peliculas.length; i++) {
    peliculas[i].addEventListener('click', function (event) {
        if (event.metaKey) {
            like.call(this);
        }
        if (event.altKey) {
            dislike.call(this);
        }
    });

    peliculas[i].addEventListener('contextmenu', function (event) {
        event.preventDefault();
        remove.call(this);
    });
}

function like() {
    remove.call(this);
    const span = document.createElement('span');
    const img = document.createElement('img');
    img.src = 'assets/images/up.png';
    img.style.width = '16px';
    span.appendChild(img);
    this.appendChild(span);
}


function dislike() {
    remove.call(this);
    const span = document.createElement('span');
    const img = document.createElement('img');
    img.src = 'assets/images/down.png';
    img.style.width = '16px';
    span.appendChild(img);
    this.appendChild(span);
}

function remove() {
    if (this.lastElementChild) {
        this.removeChild(this.lastElementChild);
    }
}