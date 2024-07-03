import * as p from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/prax.mjs'


const {E} = p.Ren.native()

// Tags button


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

