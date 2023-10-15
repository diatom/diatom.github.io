class Templ {
	constructor(head, main) {
	  this.head = head;
	  this.main = main;
	  }
	displayHead() {
	  document.getElementById('bodymain').appendChild(this.head);
	}
	displayMain() {
	  document.getElementById('bodymain').appendChild(this.main);
	}
}
class Head {
	constructor() {
	  this.nav = nav;
	  this.header = header;
	}
	displayNav() {
	  const header = document.createElement('header');
	  const nav = document.createElement('nav');
	  for (let i = 0; i < this.nav.length; i++) {
		const item = document.createElement('a');
		item.innerHTML = this.nav[i];
		item.href = '#';
		header.appendChild(item);
	  }
	  header.appendChild(nav);
	  const textnode = document.createTextNode("Water");
	  nav.appendChild(textnode);
	}
}
class Main {
	constructor() {
	  this.about = about;
	  this.latestarticle = latestarticle;
	  this.skills = skills;
	}
	displayAbout() {
		innerHTML = document.createElement('div');
	}
	displayLatestarticle() {
		const divLast = document.createElement('div');
		for (let i = 0; i < 3; i++) {
		  const latestUp = article.md;
		  latestUp.innerHTML = this.latestarticle;
		  divLast.appendChild(latestUp);
		}
	}
	displaySkills() {
		const mySkills = document.createElement('div');
		innerHTML.appendChild(mySkills);
		mySkills.appendChild(this.skills)
	}
}
let templ = new Templ(Head, Main);
templ.displayHead;
templ.displayMain;
  
  
const header = document.createElement('header');
const textnode = document.createTextNode("Water");
header.appendChild(textnode);
document.getElementById('bodymain').appendChild(header);

console.log('Kek');