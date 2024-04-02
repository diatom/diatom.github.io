import { menu, info } from './data/data.js'

class Templ {
  constructor(head, info, main, footer) {
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
export const templ = new Templ()


// class ALink extends HTMLAnchorElement {
//   constructor() {
//     super()
//   }
//   render() {
//     // for (const val of props) {
//       // for (let [key, value] of Object.entries(props)) {
//       const item = document.createElement(`a`)
//       item.setAttribute('src', window.location.origin + '/' + `${key}`)
//       item.setAttribute(`id`, `button-http`)
//       item.innerHTML = `${value}`
//       this.appendChild(item)
//       // } 
//     // }
//   }
//   // onClick() {
//   //   const get = document.getElementById(`button-http`)
//   // }
//   connectedCallback() {
//     this.render()
//   }
// }
// customElements.define('a-link', ALink, {extends: 'a'});
// const al = new ALink()

class Header {
  constructor(menu) {
    this.header = document.createElement(`header`)
    this.nav = document.createElement(`nav`)
    this.menu = menu
  }
  createNav(menu) {
    for (let [key, value] of Object.entries(menu)) {
      const item = document.createElement(`a`)
      item.setAttribute('href', 'https://diatom.github.io/' + '/' + `${key}`)
      item.setAttribute(`id`, `button-http`)
      item.innerHTML = `${value}`
      this.nav.appendChild(item)
    } 
    return this.nav
  }

  createHead(menu) {
    for (let [key, value] of Object.entries(menu)) {
      const item = document.createElement(`a`)
      item.setAttribute('href', 'https://diatom.github.io/' + '/' + `${key}`)
      item.setAttribute(`id`, `button-http`)
      item.innerHTML = `${value}`
      this.nav.appendChild(item)
    }
    this.header.appendChild(this.nav)
    return this.header
  }
}
export const header = new Header()
const nav = new Header()


// class Header {
//   constructor(menu) {
//     this.header = document.createElement(`header`)
//     this.nav = document.createElement(`nav`)
//     this.menu = menu
//   }
//   createNav(menu) {
//     for (const val of menu) {
//       const item = document.createElement(`a`)
//       item.innerHTML = val
//       this.nav.appendChild(item)
//     }
//     return this.nav
//   }

//   createHead(menu) {
//     for (const val of menu) {
//       const item = document.createElement(`a`)
//       item.innerHTML = val
//       item.setAttribute(`id`, `button-http`)
//       this.nav.appendChild(item)
//     }
//     this.header.appendChild(this.nav)
//     return this.header
//   }
// }
// export const header = new Header()
// const nav = new Header()

// function click() {
//   window.showDirectoryPicker()
//   // console.log(document.documentElement.outerHTML)
// }

class Footer {
  constructor(contact) {
    this.footer = document.createElement(`footer`)
    this.p = document.createElement(`p`)
    this.span = document.createElement(`span`)
    // this.but = document.createElement(`button`)
    // this.but.textContent = 'Lol'
    // this.but.onclick = click
    // this.logo = document.createElement(`p`)
    this.p.innerHTML = info[0]
    this.span.innerHTML = info[1]
    // this.logo.innerHTML = info[2]
    this.div = document.createElement(`div`)
    this.contact = contact
  }
  createFooter(contact) {
    for (const val of contact) {
      for (let [key, value] of Object.entries(val)) {
        const item = document.createElement(`a`)
        item.innerHTML = `${key}`
        item.setAttribute(`name`, key)
        item.setAttribute(`href`, value)
        this.div.appendChild(item)
      }
    }
  // this.footer.appendChild(this.logo)
  this.footer.appendChild(this.p)
  // this.footer.appendChild(this.but)
  this.footer.appendChild(this.div)
  this.footer.appendChild(nav.createNav(menu))
  this.footer.appendChild(this.span)
  return this.footer
  }
}
export const footer = new Footer()

let html = document.documentElement.outerHTML;