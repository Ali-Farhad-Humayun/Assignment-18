// TASK 6: Design a Class for a Geometric Shape

class Shape {
    // Base class
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class RightTriangle extends Shape {
    constructor(base, height, hypotenuse) {
        super();
        this.base = base;
        this.height = height;
        this.hypotenuse = hypotenuse;
    }
    
    area() {
        return 1/2 * this.base * this.height;
    }
    
    perimeter() {
        return (this.base + this.height + this.hypotenuse);
    }
}

const circle = new Circle(5);
console.log(circle.area()); // ~78.54
console.log(circle.perimeter()); // ~31.42

const rect = new Rectangle(4, 6);
console.log(rect.area()); // 24
console.log(rect.perimeter()); // 20

const righttri = new RightTriangle(6,8,10);
console.log(righttri.area()); // 24
console.log(righttri.perimeter()); // 24