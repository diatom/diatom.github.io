const fet = await fetch (`./main/about.md`);
console.log(fet);

const body = await fet.text();
console.log(body);

class Templ {
  constructor(head, main) {
    this.head = head;
    this.main = main;
    }
  displayHead() {
    document.getElementById(`bodymain`).appendChild(this.head);
  }
  displayMain() {
    document.getElementById(`bodymain`).appendChild(this.main);
  }
}
class Head {
  constructor(nav, header) {
    this.nav = nav;
    this.header = header;
  }
  displayNav() {
    const header = document.createElement(`header`);
    const nav = document.createElement(`nav`);
    for (const val of this.nav) {
      const item = document.createElement(`a`);
      item.innerHTML = val;
    }
  }
}
class Main {
  constructor() {
    this.about = about;
    this.latestarticle = latestarticle;
    this.skills = skills;
  }
  displayAbout() {
    innerHTML = document.createElement(`div`);
  }
  displayLatestarticle() {
    const divLast = document.createElement(`div`);
    for (let i = 0; i < 3; i++) {
      const latestUp = article.md;
      latestUp.innerHTML = this.latestarticle;
      divLast.appendChild(latestUp);
    }
  }
  displaySkills() {
    const mySkills = document.createElement(`div`);
    innerHTML.appendChild(mySkills);
    mySkills.appendChild(this.skills)
  }
}
let head = new Head();
let main = new Main();
let templ = new Templ(main, head);
templ.displayHead;
templ.displayMain;

class TemplMain {
  constructor() {
    this.main = document.createElement(`main`);
  }
  displayHead() {
    
  }
  displayMain() {

  }
  displayFooter() {

  }
  render() {
    this.appendChild
  }
}
