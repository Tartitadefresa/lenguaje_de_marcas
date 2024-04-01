function handleImageClick(event) {
    const clickedImageSrc = event.target.src;

    const mainImage = document.getElementById('main-image');

    mainImage.src = clickedImageSrc;
}

const containers = document.getElementsByClassName('grid-item');

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', handleImageClick);
}