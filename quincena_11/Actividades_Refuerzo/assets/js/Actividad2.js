const box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.position = 'absolute';

function showBox(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    
    document.body.appendChild(box);
}

function changeColor(event) {
    if (event.type === 'click') {
        box.style.backgroundColor = 'yellow';
    } else if (event.type === 'dblclick') {
        box.style.backgroundColor = 'gray';
    } else if (event.type === 'contextmenu') {
        event.preventDefault();
        box.style.backgroundColor = 'green';
    }
}

document.addEventListener('click', showBox);
document.addEventListener('dblclick', showBox);
document.addEventListener('contextmenu', showBox);
document.addEventListener('click', changeColor);
document.addEventListener('dblclick', changeColor);
document.addEventListener('contextmenu', changeColor);