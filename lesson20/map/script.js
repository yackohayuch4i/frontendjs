var map = L.map('map').setView([46.4825, 30.7233], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Координати точок для полігону
var latlngs = [
    [46.4825, 30.7233],
    [46.4850, 30.7350],
    [46.4750, 30.7350]
];

// Додавання полігону на карту
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// Додавання попапу до полігону
polygon.bindPopup("Privit.")