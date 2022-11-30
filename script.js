let myLibrary = [];
const tableBody = document.querySelector("#table-body");

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function () {
        return `${title} by ${author}, ${status}`;
    }
}

function addBookToLibrary() {
    let title = prompt("What is the name of the book?");
    let author = prompt("Who is the author of the book?");
    let status = prompt("Have you finished reading the book? read/not read");
    const newBook = new Book(title, author, status);
    myLibrary.push(newBook)
}


function displayBooks() {
    tableBody.innerHTML = "";
    myLibrary.forEach((book) => {
        const eachBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", eachBook);
    });
}
