import { marked } from './marked-lib.js'
// import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'

import { menu, contact, list } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetAbout = await fetch (`./main/about.md`)
// const fetPhoto = await fetch (`./main/myphoto.md`)
const fetHard = await fetch (`./main/hard-skills.md`)
const fetSoft = await fetch (`./main/soft-skills.md`)
const fetAll = await fetch (`./main/about-all.md`)
const aboutS = await fetAbout.text()
// const photoS = await fetPhoto.text()
const skillsS = await fetSoft.text()
const skillsH = await fetHard.text()
const all = await fetAll.text()
console.log(`Oh, hello =)`)


class About extends HTMLElement {
    render() {
        const myAbout = document.createElement(`div`)
        myAbout.innerHTML = marked.parse(aboutS)
        // this.appendChild(myAbout, this.innerHTML = marked.parse(photoS))
        this.appendChild(myAbout)
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('about-me', About)
const about = new About()


class createArticle {
    constructor(obj) {
      this.ahref = document.createElement('a')
      this.obj = obj
    }
    createDivElement() {
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const path = window.location.origin + '/blog/' + `${this.obj.dataindex}`
        h3.innerHTML = this.obj.h3
        p.innerHTML = this.obj.p
        img.setAttribute('src', this.obj.src)
        this.ahref.appendChild(img)
        this.ahref.appendChild(h3)
        this.ahref.appendChild(p)
        // this.ahref.setAttribute('style', 'background-image: url(' + this.obj.src + ')')
        this.ahref.setAttribute('class', 'article')
        this.ahref.setAttribute('href', path)
        this.ahref.setAttribute('id', this.obj.id)
        return this.ahref
    }
}

// class createArticle {
//     constructor(obj) {
//       this.divE = document.createElement('div')
//       this.obj = obj
//     }
//     createDivElement() {
//         const img = document.createElement('img')
//         const h3 = document.createElement('h3')
//         const path = window.location.origin + '/blog/' + `${this.obj.dataindex}`
//         h3.innerHTML = this.obj.h3
//         img.setAttribute('src', this.obj.src)
//         this.divE.appendChild(h3)
//         this.divE.appendChild(img)
//         this.divE.setAttribute('class', 'article')
//         this.divE.setAttribute('onclick', "window.location=" + path)
//         this.divE.setAttribute('id', this.obj.id)
//       return this.divE
//     }
// }


class LatestArticles extends HTMLElement {
    prerender() {
        const head = document.createElement('h2')
        head.innerHTML = 'Последние публикации'
        this.appendChild(head)
    }
    render() {
        const divLast = document.createElement(`div`)
        divLast.setAttribute('class', 'articles')
        for (let i = list.length - 3; i < list.length; i++) {
            const cla = new createArticle(list[i])
            divLast.appendChild(cla.createDivElement())
            this.appendChild(divLast)
        }
    }
    connectedCallback() {
        this.prerender()
        this.render()
    }
}
customElements.define('latest-articles', LatestArticles)
const latestArticles = new LatestArticles()


class Skills extends HTMLElement {
    render() {
        // const myS = document.createElement(`div`)
        // const myH = document.createElement(`div`)
        const myA = document.createElement(`div`)
        // myH.innerHTML = marked.parse(skillsH)
        // myS.innerHTML = marked.parse(skillsS)
        myA.innerHTML = marked.parse(all)
        // this.appendChild(myH)
        // this.appendChild(myS)
        this.appendChild(myA)
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('my-skills', Skills)
const skills = new Skills()


class Main {
    constructor() {
      this.main = document.createElement(`main`)
    }
    displayMain() {
      this.main.appendChild(about)
      this.main.appendChild(latestArticles)
      this.main.appendChild(skills)
      return this.main
    }
  }
const main = new Main()


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))