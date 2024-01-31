import { marked } from './marked-lib.js'

import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'
import { dat } from './data/data-books.js'


// Book cards
class createList {
  constructor(obj) {
    this.divE = document.createElement('div')
    this.obj = obj
  }
  createDivElement() {
    for (let [key, value] of Object.entries(this.obj)) {
      const pE = document.createElement('p')
      pE.innerText = `${key}: ${value}`
      this.divE.appendChild(pE)
    }
    return this.divE
  }
}


class BookList extends HTMLElement {
  render() {
    for (const value of dat) {
      console.log(value)
      const myList = new createList(value)
      const divE = myList.createDivElement()
      divE.setAttribute(`class`, `book`)
      divE.setAttribute(`data-index`, `${value.tags}`)
      this.appendChild(divE)
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('book-list', BookList)
const myList = new BookList()

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