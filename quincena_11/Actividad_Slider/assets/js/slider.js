let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay();
   autoplayInterval = setInterval(() => {
      navigate(1);
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}

startAutoplay(3000);

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        navigate(-1);
    } else if (event.key === 'ArrowRight') {
        navigate(1);
    }
});