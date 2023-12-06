// Array con las URLs de las imágenes
const images = [
  'img/foto01.jpg',
  'img/foto02.jpg',
  'img/foto03.jpg',
  'img/foto04.jpg',
  'img/foto05.jpg',
  'img/foto06.jpg',
  'img/foto07.jpg',
  'img/foto08.jpg',
  'img/foto09.jpg',
  'img/foto10.jpg',
  'img/foto11.jpg',
  'img/foto12.jpg',
  'img/foto13.jpg',
  'img/foto14.jpg',
  'img/foto15.jpg',
  // Agrega las URLs de tus imágenes aquí en la carpeta img
];

let currentImageIndex = 0;
const slide = document.getElementById('slide');
slide.src = images[currentImageIndex];
slide.style.opacity = 1;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = new Image();
  nextImage.src = images[currentImageIndex];
  nextImage.onload = () => {
    slide.src = nextImage.src;
    slide.style.opacity = 1;
  };
  slide.style.opacity = 0;
}

setInterval(changeImage, 5000); // Cambiar imagen cada 5 segundos (5000 milisegundos)