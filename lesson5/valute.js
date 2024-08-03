let exchange = 26;
for (let dollars = 10; 
    dollars <= 100;
    dollars += 10) {
        let UAH = dollars * exchange;
        console.log( `${dollars} dollars = ${UAH} UAH`);
}