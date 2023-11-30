class Main {
    constructor() {
      this.about = about
      this.latestarticle = latestarticle
      this.skills = skills
    }
    displayAbout() {
      innerHTML = document.createElement(`div`)
    }
    displayLatestarticle() {
      const divLast = document.createElement(`div`)
      for (let i = 0; i < 3; i++) {
        const latestUp = article.md
        latestUp.innerHTML = this.latestarticle
        divLast.appendChild(latestUp)
      }
    }
    displaySkills() {
      const mySkills = document.createElement(`div`)
      innerHTML.appendChild(mySkills)
      mySkills.appendChild(this.skills)
    }
  }