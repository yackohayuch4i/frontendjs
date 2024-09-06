let n = Number(prompt("введіть ціле число:"));
let result = '';

for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {

        result += i + '';
    
    } else {
        break;
    }
}

console.log(result.trim());
