import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'
import { elems, cheese, tags } from './data/data-cheese.js'


// Render tags
const divs = document.getElementsByClassName('cheese')

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


// Cheese cards
// class createList {
//   constructor(obj) {
//     this.divE = document.createElement('div')
//     this.obj = obj
//   }
//   createDivElement() {
//     for (let [key, value] of Object.entries(this.obj)) {
//       const pE = document.createElement('p')
//       pE.innerText = `${key}: ${value}`
//       this.divE.appendChild(pE)
//     }
//     return this.divE
//   }
// }


class CheeseList extends HTMLElement {
  render() {
    for (const val of cheese) {
      const div = document.createElement('div')
      const p = document.createElement('p')
      const milk = document.createElement('p')
      const age = document.createElement('p')
      const since = document.createElement('p')
      const type = document.createElement('p')
      const mold = document.createElement('p')
      const taste = document.createElement('p')
      const span = document.createElement('span')
      const tags = document.createElement('span')
      const h3 = document.createElement('h3')
      span.innerHTML = 'Id: ' + val.Id
      h3.innerHTML = val.name
      age.innerHTML = 'Срок созревания: ' + val.age
      milk.innerHTML = 'Молоко: ' + val.milk
      since.innerHTML = 'Первое упоминание: ' + val.since
      type.innerHTML = 'Тип: ' + val.type
      taste.innerHTML = 'Вкус: ' + val.taste
      mold.innerHTML = 'Плесень: ' + val.mold
      p.innerHTML = 'Описание: ' + val.description
      tags.innerHTML = 'Теги: ' + val.tags
      div.appendChild(span)
      div.appendChild(h3)
      div.appendChild(age)
      div.appendChild(milk)
      div.appendChild(since)
      div.appendChild(type)
      div.appendChild(taste)
      div.appendChild(mold)
      div.appendChild(p)
      div.appendChild(tags)
      div.setAttribute(`class`, `cheese`)
      div.setAttribute(`data-index`, `${val.tags}`)
      div.setAttribute(`id`, `${val.Id}`)
      this.appendChild(div)
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('cheese-list', CheeseList)
const myList = new CheeseList()



// class CheeseList extends HTMLElement {
//   render() {
//     for (const value of cheese) {
//       console.log(value)
//       const myList = new createList(value)
//       const divE = myList.createDivElement()
//       divE.setAttribute(`class`, `cheese`)
//       divE.setAttribute(`data-index`, `${value.tags}`)
//       this.appendChild(divE)
//     }
//   }
//   connectedCallback() {
//     this.render()
//   }
// }
// customElements.define('cheese-list', CheeseList)
// const myList = new CheeseList()



// Main
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


// Search
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")

function searchData(input) {
  const divs = document.getElementsByClassName('cheese')
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

const ibri = document.querySelectorAll('[id="ibri"]')
for (let val of ibri) {
  val.setAttribute('target', '_blank')
}