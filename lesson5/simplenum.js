function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const usernum = prompt ("Введіть ціле число:");
const n = parseInt (usernum);

if (isNan (n)) {
    console.log("Введіть ціле , коректне число");
} else {
    if (isPrime(n)) {
        console.log(`Число ${n} є простим`);
    } else {
        console.log(`Число ${n} не є простим`);
    }
}
