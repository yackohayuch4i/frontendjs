const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const imgEl = document.getElementById('imageRandom');

function displayRandomImage() {
    const randomImage = getRandomImage();
    imgEl.src = `../img/${randomImage}`; 
}

// Початкове зображення
displayRandomImage();
