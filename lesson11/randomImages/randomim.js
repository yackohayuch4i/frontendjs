let image = [
    '1.img',
    '2.img',
    '3.img',
    '4.img',
    '5.img',
    '6.img',
    '7.img'
];

function getRandomIm () {
    const randomIndex = Math.floor(Math.random() * image.length);
    return image[randomIndex];
}

const imgEl = document.getElementById('imageRandom');
imgEl.src = `imagesj/$ {getRandomIm()}`
