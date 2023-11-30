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
export const templ = new Templ()


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
export const header = new Header()


class Main {
  constructor(mainImp) {
    this.main = document.createElement(`main`)
    this.mainImp = mainImp
  }
  displayMain(mainImp) {
    this.main.innerHTML = mainImp
    return this.main
  }
}
export const main = new Main()


class Footer {
  constructor(contact) {
    this.footer = document.createElement(`footer`)
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
  this.footer.appendChild(this.div)
  return this.footer
  }
}
export const footer = new Footer()


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