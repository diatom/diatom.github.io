import { menu, contact } from './data/data.js'

const fet = await fetch (`./main/about.md`)
const body = await fet.text()
console.log(body)


class Templ {
  constructor(head, main, footer) {
    this.head = head
    this.main = main
    this.footer = footer
    }
  displayHead(head) {
    document.body.appendChild(head)
  }
  displayMain(main) {
    document.body.appendChild(main)
  }
  displayFooter(footer) {
    document.body.appendChild(footer)
  }
}

class Header {
  constructor(menu) {
    this.header = document.createElement(`header`)
    this.nav = document.createElement(`nav`)
    this.menu = menu
  }
  createHead(menu) {
    for (const val of menu) {
      const item = document.createElement(`a`)
      item.innerHTML = val
      this.nav.appendChild(item)
    }
    this.header.appendChild(this.nav)
    return this.header
  }
}
const header = new Header()


class Footer {
  constructor() {
    this.footer = document.createElement(`footer`)
    this.div = document.createElement(`div`)
  }
  createFooter() {
    for (const val of contact) {
      for (let [key, value] of Object.entries(val)) {
        const item = document.createElement(`a`)
        item.innerHTML = `${key}`
        item.setAttribute(`name`, key)
        item.setAttribute(`href`, value)
        this.div.appendChild(item)
      }
    }
  this.footer.appendChild(this.div)
  return this.footer
  }
}
const footer = new Footer()

const templ = new Templ()
templ.displayHead(header.createHead(menu))
templ.displayMain
templ.displayFooter(footer.createFooter(contact))




class Main {
  constructor() {
    this.about = about
    this.latestarticle = latestarticle
    this.skills = skills
  }
  displayAbout() {
    innerHTML = document.createElement(`div`)
  }
  displayLatestarticle() {
    const divLast = document.createElement(`div`)
    for (let i = 0; i < 3; i++) {
      const latestUp = article.md
      latestUp.innerHTML = this.latestarticle
      divLast.appendChild(latestUp)
    }
  }
  displaySkills() {
    const mySkills = document.createElement(`div`)
    innerHTML.appendChild(mySkills)
    mySkills.appendChild(this.skills)
  }
}





// Example. Register a custom element with a method that takes parameters
// customElements.define("my-element", class MyElement extends HTMLElement {
//   constructor() {
//     super()
//   }
//   setParams(params) {
//     // Do something with the parameters
//     this.innerHTML = `<style>div { color: ${params.color} }</style>`
//   }
//   render() {
//     return `
//       <style>
//         div {
//           color: ${this.params.color}
//         }
//       </style>
//       <div>${this.params.message}</div>
//     `
//   }
// })
// // Usage
// const elem = document.createElement("my-element");
// elem.params = { color: "red", message: "Hello, world!" };
// elem.setParams(elem.params);
// document.body.appendChild(elem);