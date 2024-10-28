
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    //метод для виведення балансу
    getBalance() {
        return this.balance;
    }

    //метод поповнення коштів
    deposit(amount) {
        if(amount > 0) {
            return this.balance += amount;
        } else {
            return 'Помилка:сума внеску повинна бути більше нуля';
        }
    }

    //метод зняття коштів
    withdraw(amount){
        if(amount > 0 && amount <= this.balance) {
            return this.balance -= amount;
        } else {
            return 'Помилка:введена некоректна сума';
        }
    }

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300