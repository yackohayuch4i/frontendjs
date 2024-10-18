let container = document.getElementById('container');
container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const ButtonName = event.target.dataset.name;
        alert(`Клікнуто по кнопці: ${ButtonName}`);
    }
});