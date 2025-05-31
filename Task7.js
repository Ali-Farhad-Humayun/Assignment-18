// TASK 7: Implement a Library System

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
    
    checkoutBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.available) {
            book.available = false;
            return `Checked out: ${title}`;
        }
        return `${title} not available`;
    }
    
    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && !book.available) {
            book.available = true;
            return `Returned: ${title}`;
        }
        return `${title} not found or already returned`;
    }
}

const library = new Library();
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien"));

console.log(library.checkoutBook("1984")); // Checked out: 1984
console.log(library.checkoutBook("1984")); // 1984 not available
console.log(library.returnBook("1984")); // Returned: 1984