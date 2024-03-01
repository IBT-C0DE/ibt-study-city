// Mock book data
const books = [
  { title: "Book 1", author: "Author 1", genre: "Fiction", file: "book1.pdf" },
  { title: "Book 2", author: "Author 2", genre: "Non-Fiction", file: "book2.pdf" }
];

// Function to display available books
function displayBooks() {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";

  books.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p>By ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <button onclick="viewBook('${book.file}')">View</button>
      <button onclick="downloadBook('${book.file}')">Download</button>
    `;
    booksContainer.appendChild(bookElement);
  });
}

// Function to view a book
function viewBook(file) {
  // Implement logic to display the book for online reading
  console.log(`Viewing book: ${file}`);
}

// Function to download a book
function downloadBook(file) {
  // Implement logic to initiate book download
  console.log(`Downloading book: ${file}`);
}

// Example usage:
// Display available books
displayBooks();
