const table = document.getElementById("table");
const author = document.getElementById("author");
const prio = document.getElementById("priority");
const category = document.getElementById("categories");
const title = document.getElementById("title");
const addNewBookBtn = document.getElementById("add");

const getStoragedBook = () => JSON.parse(localStorage.getItem("books"));

const books = [...getStoragedBook()];

const createNewBook = (e) => {
  e.preventDefault();

  if (title.value.length < 1 || author.value.length < 3 || prio.value === "") {
    return;
  } else {
    const book = {
      title: title.value.trim(),
      author: author.value.trim(),
      prio: prio.value > 5 ? 5 : 5,
      category: category.value,
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    newBooksRow(book.title, book.author, book.prio, book.category);
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

addNewBookBtn.addEventListener("click", (e) => createNewBook(e));

window.addEventListener("DOMContentLoaded", () => {
  books.forEach((book) =>
    newBooksRow(book.title, book.author, book.prority, book.category)
  );
  console.log(books);
});
