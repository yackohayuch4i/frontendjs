function newSum() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
}

const sum = newSum();

console.log(sum (4)); //вийде 4
console.log(sum (6)); //вийде 10
console.log(sum (10)); //вийде 20
console.log(sum (7)); // вийде 27
