import * as p from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/prax.mjs'

// import { tags } from './data/data-books.js'
// import { tags } from './data/data-cheese.js'

const {E} = p.Ren.native()

// Render tags
// const divs = document.getElementsByClassName(`book`)

// class MyCheck extends HTMLInputElement {
//     render(name) {
//         this.onchange = this.onChange
//         return E.label.props({name: `tags`, class: `button-filter`}).chi(
//             E.input.props({type: `checkbox`}).chi()
//         )
//     }
//     onChange(event) {
//       console.log(this.value)
  
//       for (const elem of divs) {
//         const data = elem.getAttribute('data-index')
//         if (data.includes(this.value)) {
//           elem.hidden = false
//         } else {
//           elem.hidden = true
//         }
//       }
//     }
// }
// customElements.define('my-check', MyCheck, {extends: 'input'})
    
// Render form
// class MyTags extends HTMLFormElement {
//     render() {
//       for (const name of tags) {
//         this.appendChild(new MyCheck().render(name))
//       }
//     }
//     onChange() {
//       const data = new FormData(this) 
//       for (const elem of divs) {
//         if (data.getAll('tags').length < 1) {
//           elem.hidden = false
//           console.log(`FormData is empty`)
//         } else {
//           console.log(`FormData contains data`)
//         }
//       }
//       console.log(data.getAll('tags'))
//     }
//     connectedCallback() {
//       this.onchange = this.onChange
//       this.setAttribute('class', 'my-tags')
//       this.render()
//     }
// }
// customElements.define('my-tags', MyTags, {extends: 'form'})

// Popup image
const images = document.querySelectorAll(`article img, .cheese img`)
const popup = document.getElementById(`popup`)
const popupImage = document.getElementById(`popupImage`)
const closeBtn = document.getElementById(`closeBtn`)

images.forEach(image => {
  image.addEventListener(`click`, () => {
      popupImage.src = image.src
      popup.style.display = `flex`
  });
})

closeBtn.addEventListener(`click`, () => {
    popup.style.display = `none`
})

document.addEventListener(`keydown`, (e) => {
  if (e.key === `Escape`) {
    popup.style.display = `none`
  }
})

popup.addEventListener(`click`, (e) => {
    if (e.target === popup) {
        popup.style.display = `none`
    }
})

// Theme switcher
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const themeSwitcher = document.getElementById('themeSwitcher')
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) {
      body.classList.add(currentTheme)
      themeSwitcher.textContent = currentTheme === 'dark-theme' ? '☀' : '☽'
  } else {
      body.classList.add('light-theme')
      themeSwitcher.textContent = '☽'
  }

  themeSwitcher.addEventListener('click', () => {
      body.classList.toggle('dark-theme')
      body.classList.toggle('light-theme')

      const newTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme'
      localStorage.setItem('theme', newTheme)
      
      themeSwitcher.textContent = newTheme === 'dark-theme' ? '☀' : '☽'
  })
})



// Search
const searchInput = document.getElementById(`searchInput`)
const searchButton = document.getElementById(`searchButton`)

function searchDataBook(input) {
  const divb = document.getElementsByClassName(`book`)
  const divs = document.getElementsByClassName(`cheese`)
  for (const elem of divb) {
    let result = elem.innerHTML.toLowerCase().includes(input)
    if (result) {
      elem.hidden = false
    } else {
      elem.hidden = true
    } 
  }
  for (const elem of divs) {
    let result = elem.innerHTML.toLowerCase().includes(input)
    if (result) {
      elem.hidden = false
    } else {
      elem.hidden = true
    } 
  }
}
searchButton.addEventListener(`click`, () => {
  const userInput = searchInput.value.toLowerCase()
  searchDataBook(userInput)
})


// Enter click
document.addEventListener(`keydown`, function(event) {
  if (event.key === `Enter`) {
      document.getElementById(`searchButton`).dispatchEvent(new Event(`click`))
      event.preventDefault()
  }
})

