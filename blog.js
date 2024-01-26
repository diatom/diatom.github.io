import { marked } from './marked-lib.js'

import { menu, contact, list } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetBlog = await fetch (`./articles/Gosudarstvo-kak-brend.md`)
const art = await fetBlog.text()


class Blog extends HTMLElement {
  render() {
      const myblog = document.createElement(`div`)
      myblog.innerHTML = marked.parse(art)
      this.appendChild(myblog)
  }
  connectedCallback() {
      this.render()
  }
}
customElements.define('my-blog', Blog)
const blog = new Blog()

class Main {
    constructor() {
      this.main = document.createElement(`main`)
    }
    displayMain() {
      this.main.appendChild(blog)
      return this.main
    }
  }
const main = new Main()


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))