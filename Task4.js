// TASK 4: Implement Task 1 using Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
person1.display(); // Name: Alice, Age: 25
person2.display(); // Name: Bob, Age: 30