function askUserNumber() {
    let askInput;
    
    for (let x = 0; x < 10; x++) {
        askInput = prompt("Введіть число більше 100");

        if (askInput > 100) {
            break;
        }
        if (askInput === null || askInput.trim() === '') {
            console.log("Немає числа");
            return;
        }
    }
    console.log(`Ваше останнє число - ${askInput}`);
}
