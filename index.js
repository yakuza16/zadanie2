const books = [];
const addNewBookBtn = document.getElementById("add");

const title = document.getElementById("title");
const author = document.getElementById("author");
const prio = document.getElementById("priority");
const category = document.getElementById("categories");

const createNewBook = (e) => {
  e.preventDefault();

  if (title.value.length < 1 || author.value.length < 3 || prio.value === "") {
    return;
  } else {
    const book = {
      number: books.length === 0 ? books.length + 1 : books.length,
      title: title.value,
      author: author.value,
      prio: prio.value,
      category: category.value,
    };
    books.push(book);

    title.value = "";
    prio.value = "";
    author.value = "";

    console.log(books);
  }
};

addNewBookBtn.addEventListener("click", (e) => createNewBook(e));
