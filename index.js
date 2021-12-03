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
      title: title.value,
      author: author.value,
      prio: prio.value,
      category: category.value,
    }
    books.push(book)

    title.value = ""
    prio.value = ""
    author.value = ""

    console.log(books)

    newBooksRow(book.number, book.title, book.author, book.prio, book.category)
  }
}

const newBooksRow = (num, title, author, priority, category) => {
  const newBookRow = document.createElement("tr")
  const numColumn = document.createElement("td")
  const titleColumn = document.createElement("td")
  const authorColumn = document.createElement("td")
  const prioColumn = document.createElement("td")
  const categoryColumn = document.createElement("td")

  numColumn.textContent = num
  titleColumn.textContent = title
  authorColumn.textContent = author
  prioColumn.textContent = priority
  categoryColumn.textContent = category

  const bookColumn = [
    numColumn,
    titleColumn,
    authorColumn,
    prioColumn,
    categoryColumn,
  ]

  bookColumn.forEach((item) => newBookRow.appendChild(item))
  table.appendChild(newBookRow)
}

addNewBookBtn.addEventListener("click", (e) => createNewBook(e))
