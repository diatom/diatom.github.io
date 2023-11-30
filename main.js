import { menu, contact } from './data/data.js'
import { templ, header, main, footer } from './templ.js'

const fet = await fetch (`./main/about.md`)
const body = await fet.text()
console.log(body)


class About extends HTMLAbout {
    displayAbout() {
        innerHTML = document.createElement(`div`)
    }
}
customElements.define('about', About)
const about = document.createElement('about')


class LatestArticles extends HTMLElement {
    displayLatestarticles() {
        const divLast = document.createElement(`div`)
        for (let i = 0; i < 3; i++) {
          const latestUp = article.md
          latestUp.innerHTML = this.latestarticle
          divLast.appendChild(latestUp)
        }
    }
}
customElements.define('latest-articles', LatestArticles)
const latestArticles = document.createElement('latest-articles')


class Skills extends HTMLElement {
    displaySkills() {
        const mySkills = document.createElement(`div`)
        innerHTML.appendChild(mySkills)
        mySkills.appendChild(this.skills)
    }
}
customElements.define('skills', Skills)
const skills = document.createElement('skills')


// class Main {
//     constructor(about, latestArticles, skills) {
//       this.main = document.createElement(`main`)
//       this.about = about
//       this.latestArticles = latestArticles
//       this.skills = skills
//     }
//     displayMain(about, latestArticles, skills) {
//       this.main.appendChild(about)
//       this.main.appendChild(latestArticles)
//       this.main.appendChild(skills)
//       return this.main
//     }
//   }
// const main = new Main(about, latestArticles, skills)


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain(body))
templ.displayFooter(footer.createFooter(contact))
