import { marked } from './marked-lib.js'

import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'
import { dat } from './book-review/data-books.js'


// Book cards
// class createList {
//   constructor(obj) {
//     this.div = document.createElement('div')
//     this.obj = obj
//   }
//   createDivElement() {
//     for (let [key, value] of Object.entries(this.obj)) {
//       const p = document.createElement('p')
//       const span = document.createElement('span')
//       const h3 = document.createElement('h3')
//       p.innerText = `${key}: ${value}`
//       this.div.appendChild(p)
//     }
//     return this.div
//   }
// }
// class createList {
//   constructor(obj) {
//     this.div = document.createElement('div')
//     this.obj = obj
//   }
//   createDivElement() {
//     for (let val of this.obj) {
//       const p = document.createElement('p')
//       const span = document.createElement('span')
//       const h3 = document.createElement('h3')
//       span.innerText = val.Id
//       h3.innerText = val.name
//       p.innerText = val.Автор
//       // p.innerText = val.Жанр
//       // p.innerText = val.Дата
//       // p.innerText = val.Описание
//       // p.innerText = val.Рейтинг
//       // p.innerText = val.Теги
//       this.div.appendChild(span)
//       this.div.appendChild(h3)
//       this.div.appendChild(p)
//     }
//     return this.div
//   }
// }

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
      const h3 = document.createElement('h3')
      span.innerHTML = 'Id: ' + val.Id
      h3.innerHTML = val.name
      author.innerHTML = 'Автор: ' + val.author
      genre.innerHTML = 'Жанр: ' + val.genre
      date.innerHTML = 'Дата: ' + val.date
      p.innerHTML = val.description
      rating.innerHTML = 'Рейтинг: ' + val.rating
      div.appendChild(span)
      div.appendChild(h3)
      div.appendChild(author)
      div.appendChild(genre)
      div.appendChild(date)
      div.appendChild(p)
      div.appendChild(rating)
      div.setAttribute(`class`, `book`)
      div.setAttribute(`data-index`, `${val.tags}`)
      this.appendChild(div)
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('book-list', BookList)
const myList = new BookList()


// class BookList extends HTMLElement {
//   render() {
//     for (const val of dat) {
//       // console.log(value)
//       // const myList = new createList(value)
//       const div = myList.createDivElement()
//       div.setAttribute(`class`, `book`)
//       div.setAttribute(`data-index`, `${val.tags}`)
//       this.appendChild(div)
//     }
//   }
//   connectedCallback() {
//     this.render()
//   }
// }
// customElements.define('book-list', BookList)
// const myList = new BookList()


// Main
class Main {
    constructor() {
      this.main = document.createElement(`main`)
    }
    displayMain() {
      this.main.appendChild(myList)
      return this.main
    }
  }
const main = new Main()


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))