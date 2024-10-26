const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const imgEl = document.getElementById('imageRandom');

function displayRandomImage() {
    const randomImage = getRandomImage();
    imgEl.src = randomImage; // Вказуємо відносний шлях до файлу зображення
}

// Початкове зображення
displayRandomImage();
