let number = prompt("Введіть трьох-значне число");
if (number.length === 3 && isNaN(number))
    {
        let part = numper.split('');
        let same = part[0] === part[1] && part[1] === part[2];
        let anysame = part[0] === part[1] || part[1] === part[2] || part[0] === part[2];
        console.log(`Чи всі цифри однакові? ${same ? 'yes' : 'no'} `);
        console.log(`Чи повторюються деякі цифри? ${anysame ? 'yes' : 'no'}`);
    } else{
        alert("ВВедіть інше число");
    }
