import { menu, contact, list } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetBlog = await fetch (`./articles/Gosudarstvo-kak-brend.md`)
const art = await fetBlog.text()


class Blog extends HTMLElement {
  render() {
    for (const val of list) {
      const myblog = document.createElement(`div`)
      const span = document.createElement('span')
      const ahref = document.createElement('a')
      const h3 = document.createElement('h3')
      const path = window.location.origin + '/blog/' + `${val.dataindex}`
      h3.innerHTML = val.h3
      span.innerHTML = val.date
      myblog.appendChild(span)
      myblog.appendChild(ahref)
      ahref.appendChild(h3)
      ahref.setAttribute('href', path)
      myblog.setAttribute('id', val.id)
      myblog.setAttribute('dataindex', val.dataindex)
      this.appendChild(myblog)
    }
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