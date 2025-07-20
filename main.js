const myLibrary = [
  // this is an array to hold all the books
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true, id: crypto.randomUUID() },
  { title: "1984", author: "George Orwell", pages: 328, read: false, id: crypto.randomUUID() },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: true, id: crypto.randomUUID() },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: false, id: crypto.randomUUID() }
];

function Book(title, author, pages, read=false) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

function displayBooks() {
  // loop through the array and display each book
  for (const book of myLibrary) {
    const newDiv = document.createElement('div');
    newDiv.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;
    console.log(document.body.append(newDiv));
  }
}

