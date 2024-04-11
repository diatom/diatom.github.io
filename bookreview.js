import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'
import { dat, elems, tags } from './data/data-books.js'



// Render tags
const divs = document.getElementsByClassName('book')

export class MyCheck extends HTMLInputElement {
  render(name) {
    this.name = 'tags'
    const label = document.createElement('label')
    this.type = 'checkbox'
    label.setAttribute('class', 'button-filter')
    this.value = name.trim()
    label.append(this, this.value)
    this.onchange = this.onChange
    return label
  }
  onChange(event) {
    console.log(this.value)

    for (const elem of divs) {
      const data = elem.getAttribute('data-index')
      if (data.includes(this.value)) {
        elem.hidden = false
      } else {
        elem.hidden = true
      }
    }
  }
}
customElements.define('my-check', MyCheck, {extends: 'input'})


// Render form
export class MyTags extends HTMLFormElement {
  render() {
    for (const name of tags) {
      this.appendChild(new MyCheck().render(name))
    }
  }
  onChange() {
    const data = new FormData(this) 
    for (const elem of divs) {
      if (data.getAll('tags').length < 1) {
        elem.hidden = false
        console.log("FormData is empty")
      } else {
        console.log("FormData contains data")
      }
    }
    console.log(data.getAll('tags'))
  }
  connectedCallback() {
    this.onchange = this.onChange
    this.setAttribute('class', 'my-tags')
    this.render()
  }
}
customElements.define('my-tags', MyTags, {extends: 'form'})


// Render books
class BookList extends HTMLElement {
  render() {
    for (const val of dat) {
      const div = document.createElement('div')
      const p = document.createElement('p')
      const genre = document.createElement('p')
      const author = document.createElement('p')
      const date = document.createElement('p')
      const rating = document.createElement('p')
      const span = document.createElement('span')
      const tags = document.createElement('span')
      const h3 = document.createElement('h3')
      span.innerHTML = 'Id: ' + val.Id
      h3.innerHTML = val.name
      author.innerHTML = 'Автор: ' + val.author
      genre.innerHTML = 'Жанр: ' + val.genre
      date.innerHTML = 'Дата: ' + val.date
      p.innerHTML = val.description
      rating.innerHTML = 'Мой рейтинг: ' + val.rating
      tags.innerHTML = 'Теги: ' + val.tags
      div.appendChild(span)
      div.appendChild(h3)
      div.appendChild(author)
      div.appendChild(genre)
      div.appendChild(date)
      div.appendChild(p)
      div.appendChild(rating)
      div.appendChild(tags)
      div.setAttribute(`class`, `book`)
      div.setAttribute(`data-index`, `${val.tags}`)
      div.setAttribute(`id`, `${val.Id}`)
      this.appendChild(div)
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('book-list', BookList)
const myList = new BookList()


// Render main
class Main {
    constructor() {
      this.main = document.createElement(`main`)
      this.info = document.createElement(`div`)
      this.info.setAttribute(`class`, `info`)
      this.info.innerHTML = elems
    }
    displayMain() {
      this.main.appendChild(this.info)
      this.main.appendChild(myList)
      return this.main
    }
  }
const main = new Main()


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))


// Render search
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")

function searchData(input) {
  const divs = document.getElementsByClassName('book')
  for (const elem of divs) {
    let result = elem.innerHTML.toLowerCase().includes(input)
    if (result) {
      elem.hidden = false
    } else {
      elem.hidden = true
    } 
  }
}
searchButton.addEventListener('click', () => {
  const userInput = searchInput.value.toLowerCase()
  searchData(userInput)
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      document.getElementById('searchButton').click()
      event.preventDefault()
  }
})