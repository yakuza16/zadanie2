const table = document.getElementById("table");
const author = document.getElementById("author");
const prio = document.getElementById("priority");
const category = document.getElementById("categories");
const title = document.getElementById("title");
const form = document.getElementById("form");

const isBook = (author) => {
  return author !== null;
};

const getStoragedBooks = () => {
  const storagedBooks = [];
  for (item in localStorage) {
    storagedBooks.push(JSON.parse(localStorage.getItem(item)));
  }
  const filteredBooks = storagedBooks.filter(isBook);

  return filteredBooks;
};

const books = [...getStoragedBooks()];

const createNewBook = (e) => {
  e.preventDefault();

  if (title.value.length < 1 || author.value.length < 3 || prio.value === "") {
    return;
  } else {
    const book = {
      title: title.value.trim(),
      author: author.value.trim(),
      priority: prio.value > 5 ? 5 : prio.value < 1 ? 1 : prio.value,
      category: category.value,
    };
    books.push(book);
    localStorage.setItem(`book${book.title}`, JSON.stringify(book));
    newBooksRow(book.title, book.author, book.priority, book.category);
    title.value = "";
    prio.value = "";
    author.value = "";
  }
};

const newBooksRow = (title, author, priority, category) => {
  const newBookRow = document.createElement("tr");

  newBookRow.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${priority}</td>
  <td>${category}</td>
  `;
  table.appendChild(newBookRow);
};

form.addEventListener("submit", (e) => createNewBook(e), false);

getStoragedBooks();

window.addEventListener("DOMContentLoaded", () => {
  getStoragedBooks();
  books.forEach((book) => {
    const { title, author, priority, category } = book;
    newBooksRow(title, author, priority, category);
  });
});
