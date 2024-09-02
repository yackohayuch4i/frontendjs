function newSum() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
}

const sum = newSum();

console.log(sum (4)); // 4
console.log(sum (6)); //10
console.log(sum (10)); //20
console.log(sum (7)); // 27