import { marked } from './marked-lib.js'

import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'

const path = window.location.pathname.replace(/\/$/, '') + '.md'
const fetArticle = await fetch (path)
const art = await fetArticle.text()


class Article extends HTMLElement {
  render() {
      const myarticle = document.createElement(`div`)
      myarticle.innerHTML = marked.parse(art)
      this.appendChild(myarticle)
  }
  connectedCallback() {
      this.render()
  }
}
customElements.define('my-article', Article)
const article = new Article()

class Main {
    constructor() {
      this.main = document.createElement(`main`)
    }
    displayMain() {
      this.main.appendChild(article)
      return this.main
    }
  }
const main = new Main()


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))