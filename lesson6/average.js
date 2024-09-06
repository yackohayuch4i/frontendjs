function averageNum (arr) {
    let numeration = arr.filter(element => typeof element === 'number');
    if (numeration.length === 0) {
        return 0;
    }
    let sum = numeration.reduce( (acc, curr) => acc + curr , 0);
    return sum / numeration.length;
}

let someArray = [null , 6 ,2 , 4 ,8 , "number"];
console.log(averageNum(someArray));
