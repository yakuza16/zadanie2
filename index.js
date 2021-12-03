const books = []
const addNewBookBtn = document.getElementById("add")

const title = document.getElementById("title")
const table = document.getElementById("table")
const author = document.getElementById("author")
const prio = document.getElementById("priority")
const category = document.getElementById("categories")

const createNewBook = (e) => {
  e.preventDefault()

  if (title.value.length < 1 || author.value.length < 3 || prio.value === "") {
    return
  } else {
    const book = {
      number: books.length === 0 ? 1 : books.length + 1,
      title: title.value.trim(),
      author: author.value.trim(),
      prio: prio.value,
      category: category.value,
    }
    books.push(book)
    localStorage.setItem(`book${book.number}`, JSON.stringify(book))

    title.value = ""
    prio.value = ""
    author.value = ""

    console.log(books)

    newBooksRow(book.number, book.title, book.author, book.prio, book.category)
  }
}

const newBooksRow = (num, title, author, priority, category) => {
  const newBookRow = document.createElement("tr")

  newBookRow.innerHTML = `
  <td>${num}</td>
  <td>${title}</td>
  <td>${author}</td>
  <td>${priority}</td>
  <td>${category}</td>
  `
  table.appendChild(newBookRow)
}

addNewBookBtn.addEventListener("click", (e) => createNewBook(e))
