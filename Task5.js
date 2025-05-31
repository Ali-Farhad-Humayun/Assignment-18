// TASK 5: Implement a Calculator Class

class Calculator {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    
    add() {
        return this.value1 + this.value2;
    }
    
    subtract() {
        return this.value1 - this.value2;
    }
    
    multiply() {
        return this.value1 * this.value2;
    }
    
    divide() {
        return this.value1 / this.value2;
    }
}

const calc = new Calculator(10, 5);
console.log(calc.add()); // 15
console.log(calc.subtract()); // 5
console.log(calc.multiply()); // 50
console.log(calc.divide()); // 2