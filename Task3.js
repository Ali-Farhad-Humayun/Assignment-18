// TASK 3: Create a Constructor for a Book

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
};

const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
book1.displayInfo(); // Title: The Hobbit, Author: J.R.R. Tolkien
book2.displayInfo(); // Title: 1984, Author: George Orwell