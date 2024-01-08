import { marked } from './marked-lib.js'

import { menu, contact, list } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetBlog = await fetch (`./articles/${aaaaaaaaa}.md`)
const blog = await fetBlog.text()


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