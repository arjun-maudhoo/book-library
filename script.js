let myLibrary = [];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function () {
        return `${title} by ${author}, ${status}`;
    }
}

function addBookToLibrary() {
    let name = prompt("");
    let author = prompt("");
    let status = prompt("");
    const newBook = new Book(name, author, status);
    myLibrary.push(newBook)
    // take input
    // create object from input
    // store object into library array
}