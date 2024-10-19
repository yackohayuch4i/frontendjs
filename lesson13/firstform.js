document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Ввести ім`я обов`язково.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Повідомлення має бути більше 5 символів.';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Номер повинен починатись з +380 та мати 9 символів.';
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Пошта повинна містити @ та крапку.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if(valid) {

        console.log({name , message , phone , email});
    }

});

