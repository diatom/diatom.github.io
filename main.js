import { menu } from './data/data.js'

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
  createNav() {
    for (const val of menu) {
      const item = document.createElement(`a`)
      item.innerHTML = val
      this.nav.appendChild(item)
    }
      }
  createHead(menu) {
    header.appendChild(this.createNav(menu))
    return this.header
  }
}
// customElements.define('header-nav', Header)
const header = new Header()

const templ = new Templ()
templ.displayHead(header.createHead(menu))
templ.displayMain
templ.displayFooter




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
let head = new Head()
let main = new Main()


class TemplMain {
  constructor() {
    this.main = document.createElement(`main`)
  }
  displayHead() {
    
  }
  displayMain() {

  }
  displayFooter() {

  }
  render() {
    this.appendChild
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