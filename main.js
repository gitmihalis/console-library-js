const myLibrary = [];

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
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`);
  } 
}

