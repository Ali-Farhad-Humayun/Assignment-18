// TASK 2: Implement a Bank Account

function BankAccount(initialBalance) {
    this.balance = initialBalance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        console.log("Insufficient funds");
    } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
};

const account = new BankAccount(1000);
account.deposit(500); // Deposited 500. New balance: 1500
account.withdraw(200); // Withdrew 200. New balance: 1300