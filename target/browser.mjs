import * as p from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/prax.mjs'


const {E} = p.Ren.native()

// Tags button
document.addEventListener(`DOMContentLoaded`, function() {
  const buttons = document.querySelectorAll(`button[type='button']`)
  const blogDivs = document.querySelectorAll(`.filter`)
  const activeTags = new Set()

  buttons.forEach(button => {
    button.addEventListener(`click`, function() {
      const buttonTag = this.innerText.trim().toLowerCase()
      
      if (activeTags.has(buttonTag)) {
        activeTags.delete(buttonTag)
      } else {
        activeTags.add(buttonTag)
      }

      blogDivs.forEach(div => {
        const divButtons = div.querySelectorAll(`button[type='button']`)
        const divTags = Array.from(divButtons).map(btn => btn.innerText.trim().toLowerCase())

        const shouldShow = Array.from(activeTags).every(tag => divTags.includes(tag))
        
        if (shouldShow) {
          div.style.display = `block`
        } else {
          div.style.display = `none`
        }
      })
    })
  })
})

document.addEventListener(`DOMContentLoaded`, function() {
  var buttons = document.querySelectorAll(`.btn`)

  buttons.forEach(function(button) {
      button.addEventListener(`click`, function() {
          button.classList.toggle(`active`)
      })
  })
})




// Theme switcher
// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.body
//   const themeSwitcher = document.getElementById('themeSwitcher')
//   const currentTheme = localStorage.getItem('theme')

//   if (currentTheme) {
//       body.classList.add(currentTheme)
//       themeSwitcher.textContent = currentTheme === 'dark-theme' ? '☀' : '☽'
//   } else {
//       body.classList.add('light-theme')
//       themeSwitcher.textContent = '☽'
//   }

//   themeSwitcher.addEventListener('click', () => {
//       body.classList.toggle('dark-theme')
//       body.classList.toggle('light-theme')

//       const newTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme'
//       localStorage.setItem('theme', newTheme)
      
//       themeSwitcher.textContent = newTheme === 'dark-theme' ? '☀' : '☽'
//   })
// })



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

