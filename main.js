import { marked } from './marked-lib.js'
// import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'

import { menu, contact, list } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetAbout = await fetch (`./main/about.md`)
const fetPhoto = await fetch (`./main/myphoto.md`)
const fetArticles = await fetch (`./articles/articles.md`)
const fetSkills = await fetch (`./main/skills.md`)
const aboutS = await fetAbout.text()
const photoS = await fetPhoto.text()
const articlesS = await fetArticles.text()
const skillsS = await fetSkills.text()
console.log(`Oh, hello =)`)


class About extends HTMLElement {
    render() {
        const myAbout = document.createElement(`div`)
        myAbout.innerHTML = marked.parse(aboutS)
        this.appendChild(myAbout, this.innerHTML = marked.parse(photoS))
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('about-me', About)
const about = new About()


// for (let i=src.lenght; src.lenght < i-3; i++) {
//     const art = document.getElementsByClassName('article')
//     if (list.includes(src)) {
//         const fet = await fetch (`./articles/` + `${src}` + `.md`)
//         const articlesS = await fet.text()
//         const divLast = document.createElement(`div`)
//         divLast.innerHTML = marked.parse(articlesS)
//         divLast.setAttribute('class', 'articles')
//         const head = document.createElement('h2')
//         head.innerHTML = 'Последние публикации'
//         this.appendChild(head)
//         this.appendChild(divLast)
//     }
// }


class createArticle {
    constructor(obj) {
      this.divE = document.createElement('div')
      this.obj = obj
    }
    createDivElement() {
      for (let [key, value] of Object.entries(this.obj)) {
        this.divE.innerText = `${key[h2]}`
        this.divE.setAttribute(key, value)
      }
      return this.divE
    }
}


class LatestArticles extends HTMLElement {
    prerender() {
        const head = document.createElement('h2')
        head.innerHTML = 'Последние публикации'
        this.appendChild(head)
    }
    render() {
        for (let i = list.length - 3; i < list.length; i++) {
            const divLast = document.createElement(`div`)
            divLast.innerHTML = new createArticle(list[i])
            divLast.setAttribute('class', 'articles')
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


// class LatestArticles extends HTMLElement {
//     render() {
//         const divLast = document.createElement(`div`)
//         divLast.innerHTML = marked.parse(articlesS)
//         divLast.setAttribute('class', 'articles')
//         const head = document.createElement('h2')
//         head.innerHTML = 'Последние публикации'
//         this.appendChild(head)
//         this.appendChild(divLast)
//     }
//     connectedCallback() {
//         this.render()
//     }
// }

class Skills extends HTMLElement {
    render() {
        const mySkills = document.createElement(`div`)
        mySkills.innerHTML = marked.parse(skillsS)
        this.appendChild(mySkills)
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