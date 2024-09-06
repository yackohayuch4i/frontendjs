function remove (str , deletechars) {
    let result = "";
    for (let char of str) {
        if (!deletechars.includes(char)) {
            result += char;
        }
    }
    return result;
}

let string = prompt ("Введіть рядок");
let deletechar = prompt ("Введіть символи ,щоб видалити (без пробілів)").split("");
let finalresult = remove(string, deletechar);
console.log(`Результат: ${finalresult}`);

