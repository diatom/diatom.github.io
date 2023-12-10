import { menu, contact } from './data/data.js'
import { templ, header, footer } from './templ.js'

const fetAbout = await fetch (`./main/about.md`)
const fetArticles = await fetch (`./articles/articles.md`)
const fetSkills = await fetch (`./main/skills.md`)
const aboutS = await fetAbout.text()
const articlesS = await fetArticles.text()
const skillsS = await fetSkills.text()
console.log(aboutS)


class About extends HTMLElement {
    displayAbout(me) {
        // const myAbout = document.createElement(`div`)
        // this.appendChild(myAbout)
        this.innerHTML = me
    }
    connectedCallback() {
        return displayAbout()
    }
}
const ab = customElements.define('about-me', About)
const about = document.createElement('about-me')
about.me = aboutS
about.displayAbout(about.me)


class LatestArticles extends HTMLElement {
    displayLatestarticles(articles) {
        // for (const art of articles) {
          const divLast = document.createElement(`div`)
          divLast.innerHTML = articles
          this.appendChild(divLast)
        // }
    }
    connectedCallback() {
        return displayLatestarticles()
    }
}
const la = customElements.define('latest-articles', LatestArticles)
const latestArticles = document.createElement('latest-articles')
latestArticles.articles = articlesS
latestArticles.displayLatestarticles(latestArticles.articles)


class Skills extends HTMLElement {
    displaySkills(myskill) {
        const mySkills = document.createElement(`div`)
        mySkills.innerHTML = myskill
        this.appendChild(mySkills)
    }
    connectedCallback() {
        return displaySkills()
    }
}
const sk = customElements.define('my-skills', Skills)
const skills = document.createElement('my-skills')
skills.myskill = skillsS
skills.displaySkills(skills.myskill)


class Main {
    constructor(about, latestArticles, skills) {
      this.main = document.createElement(`main`)
      this.about = about
      this.latestArticles = latestArticles
      this.skills = skills
    }
    displayMain() {
      this.main.appendChild(about)
      this.main.appendChild(latestArticles)
      this.main.appendChild(skills)
      return this.main
    }
  }
const main = new Main(ab, la, sk)


templ.displayHead(header.createHead(menu))
templ.displayMain(main.displayMain())
templ.displayFooter(footer.createFooter(contact))