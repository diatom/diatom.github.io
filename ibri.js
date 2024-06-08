import { marked } from './marked-lib.js'

import { contact } from './data/data.js'
import { templ, footer } from './templ.js'

const fetAbout = await fetch (`./data/about-ibri.md`)
const fetAll = await fetch (`./data/about-all-ibri.md`)
const aboutS = await fetAbout.text()
const all = await fetAll.text()


class About extends HTMLElement {
    render() {
        const myAbout = document.createElement(`div`)
        myAbout.innerHTML = marked.parse(aboutS)
        this.appendChild(myAbout)
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('about-ibri', About)
const about = new About()


class Skills extends HTMLElement {
    render() {
        const myA = document.createElement(`div`)
        myA.innerHTML = marked.parse(all)
        this.appendChild(myA)
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('my-ibri', Skills)
const skills = new Skills()


class Main {
    constructor() {
      this.main = document.createElement(`main`)
    }
    displayMain() {
      this.main.appendChild(about)
      this.main.appendChild(skills)
      return this.main
    }
  }
const main = new Main()


templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))