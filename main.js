class Templ {
	constructor(head, main) {
	  this.head = head;
	  this.main = main;
	  }
	static displayHead() {
	  document.getElementById('bodymain').appendChild(head);
	}
	static displayMain() {
	  document.getElementById('bodymain').appendChild(main);
	}
  }
  class Head {
	constructor() {
	  this.nav = nav;
	  this.header = header;
	}
	static displayNav() {
	  const header = document.createElement('header');
	  const nav = document.createElement('nav');
	  for (let i = 0; i < this.nav.length; i++) {
		const item = document.createElement('a');
		item.innerHTML = this.nav[i];
		item.href = '#';
		header.appendChild(item);
	  }
	  header.appendChild(nav);
	}
  }
  class Main {
	constructor() {
	  this.about = about;
	  this.latestarticle = latestarticle;
	  this.skills = skills;
	}
	static displayAbout() {
		
	}
  }
  let templ = new Templ(Head, Main);
  
  
  const header = document.createElement('header');
  const main = document.createElement('main');
  const textnode = document.createTextNode("Water");
  const textnode1 = document.createTextNode("Water");
  header.appendChild(textnode);
  main.appendChild(textnode1);
  document.getElementById('bodymain').appendChild(header);
  document.getElementById('bodymain').appendChild(main);
  
  