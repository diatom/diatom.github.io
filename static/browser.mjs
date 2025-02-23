import * as p from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/prax.mjs'


const {E} = p.Ren.native()
console.log(`Hey ╰(*°▽°*)╯`)


// Menu
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('menu')
  const mobileMenu = document.querySelector('mobilemenu')

  menuIcon.addEventListener('click', function() {
    mobileMenu.style.display = `flex`
  })

  mobileMenu.addEventListener(`click`, (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.style.display = `none`
    }

  })

  document.addEventListener('click', function(e) {
    if (mobileMenu.style.display === 'flex' && e.target !== mobileMenu && e.target !== menuIcon) {
      mobileMenu.style.display = 'none '
    }
  })
})

// Popup image
const images = document.querySelectorAll('article img, .cheese img, .spoiler img')
const popup = document.getElementById('popup')
const popupImage = document.getElementById('popupImage')
const closeBtn = document.getElementById('closeBtn')

let startX = 0
let startY = 0

images.forEach(image => {
  image.addEventListener('click', () => {
      popupImage.src = image.src
      popup.style.display = 'flex'
  })
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.style.display = 'none'
  }
})

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none'
    }
})



// Tags button
if (window.location.pathname.startsWith('/blog') || window.location.pathname === ('/bookreview') || window.location.pathname === ('/cheese')) {
  document.addEventListener('DOMContentLoaded', function() {
    const tagsContainer = document.querySelector('tags')
    const buttons = tagsContainer.querySelectorAll('button[type="button"]')
    const blogDivs = document.querySelectorAll('.filter, .book, .cheese')
    const activeTags = new Set()

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonTag = this.innerText.trim().toLowerCase()

        if (activeTags.has(buttonTag)) {
          activeTags.delete(buttonTag)
        } else {
          activeTags.add(buttonTag)
        }

        blogDivs.forEach(div => {
          const divButtons = div.querySelectorAll('arttags button[type="button"]')
          const divTags = Array.from(divButtons).map(btn => btn.innerText.trim().toLowerCase())

          const shouldShow = Array.from(activeTags).every(tag => divTags.includes(tag))

          if (shouldShow) {
            div.style.display = 'block'
          } else {
            div.style.display = 'none'
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
}


// Search
if (window.location.pathname === `/bookreview`) {
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
        elem.style.display = `block`
      } else {
        elem.style.display = `none`
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
}

// Spoiler 
if (window.location.pathname === `/cheese`) {
  document.querySelectorAll('.spoiler-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active')
      const content = header.nextElementSibling
      if (content.style.display === 'block') {
        content.style.display = 'none'
        header.querySelector('.toggle-icon').textContent = '▶'
      } else {
        content.style.display = 'block'
        header.querySelector('.toggle-icon').textContent = '▼'
      }
    })
  })
}


// Close button about me
// if (window.location.pathname === `/`) {
//   document.getElementById('close-about').addEventListener('click', function(event) {
//     const aboutMeElement = document.getElementById('aboutme')
//     if (aboutMeElement) {
//         aboutMeElement.style.display = 'none'
//     }
//     event.stopPropagation()
//   })
//   document.addEventListener('keydown', function(event) {
//     const aboutMeElement = document.getElementById('aboutme')
//     if (event.key === 'Escape' && aboutMeElement && aboutMeElement.style.display === 'flex') {
//         aboutMeElement.style.display = 'none'
//     }
//   })
// }
// window.addEventListener('DOMContentLoaded', function() {
//   const minimalButton = document.getElementById('minimal')
//   if (window.location.pathname === '/') {
//       minimalButton.style.display = 'block'
//   } else {
//       minimalButton.style.display = 'none'
//   }
// })