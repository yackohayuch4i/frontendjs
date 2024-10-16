let userLink = "";

const setLinkBtn = document.getElementById('setLink');
const redirectBtn = document.getElementById('redirectButton');

setLinkBtn.addEventListener('click', () => {
    const link = prompt("Введіть посилання для перенаправлення:");
    
    if (link && link.trim() !== "") {
        userLink = link.trim(); 
        redirectBtn.disabled = false;
    }
});

redirectBtn.addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink; 
    }
});