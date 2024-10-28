class Calculator {

    //метод додавання
    add(a , b) {
        return a + b;
    }

    //метод віднімання
    substract(a , b) {
        return a - b;
    }

    //метод множення
    multiply(a , b) {
        return a * b;
    }

    //метод ділення
    devide(a , b) {
        if (b !== 0) {
            return a / b ;
        } else {
            return 'Помилка: не можна поділити на нуль'
        }
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4