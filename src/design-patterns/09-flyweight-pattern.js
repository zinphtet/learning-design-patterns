// The Flyweight pattern is a classical structural solution for optimizing code that is repetitive , slow , and inefficiently shares data.
// It aims to minimize the use of memory in an application by sharings as much data as possible
// with related objects. (eg, ap config , state , and so on , ...)

// In Flyweight pattern , there is a concept of two states : intric and extric .
// Intrinsic info my be required by internal methods in our objects, which they absolutely cannot function without.
// Extric info can however be removed and stored externally.
// Objects with the same intrinsic data can replacced with a single shared objecy , created b a factory method.

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const isbnNumbers = new Set();
const bookList = [];

const addBook = (title, author, isbn, instock, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    instock,
    isbn,
  };
  bookList.push(book);
  return book;
};

const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn);
  if (book) {
    return book;
  } else {
    const book = new Book(title, author, isbn);
    isbnNumbers.add(isbn);
    return book;
  }
};


addBook("Harry","J:K", "123", true , 100)
addBook("Harry","J:K", "123", true , 100)
addBook("HaHirry","J:K", "435", true , 100)
console.table(bookList)
console.log(isbnNumbers.values())