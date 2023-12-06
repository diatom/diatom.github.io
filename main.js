import { menu, contact } from './data/data.js'
import { templ, header, main, footer } from './templ.js'

const fet = await fetch (`./main/about.md`)
const info = await fet.text()
console.log(info)


class About extends HTMLElement {
    displayAbout(me) {
        this.innerHTML = me
    }
    render() {
        return displayAbout()
    }
}
customElements.define('about', About)
const about = document.createElement('about')
about.me = info
about.displayAbout(about.me)


class LatestArticles extends HTMLElement {
    displayLatestarticles(articles) {
        for (const art of articles) {
          const divLast = document.createElement(`div`)
          divLast.innerHTML = art
          this.appendChild(divLast)
        }
    }
    render() {
        return displayLatestarticles()
    }
}
customElements.define('latest-articles', LatestArticles)
const latestArticles = document.createElement('latest-articles')
latestArticles.articles = article
latestArticles.displayLatestarticles(latestArticles.articles)


class Skills extends HTMLElement {
    displaySkills(myskill) {
        const mySkills = document.createElement(`div`)
        mySkills.innerHTML = myskill
        this.appendChild(mySkills)
    }
    render() {
        return displaySkills()
    }
}
customElements.define('skills', Skills)
const skills = document.createElement('skills')
skills.myskill = skill
skills.displaySkills(skills.myskill)




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
templ.displayMain(main.displayMain(info))
templ.displayFooter(footer.createFooter(contact))
