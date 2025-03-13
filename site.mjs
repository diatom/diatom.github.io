/* global Deno */

import * as a from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/all.mjs'
import * as p from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/prax.mjs'
import * as dg from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/dom_glob_shim.mjs'
// import {paths as pt} from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/io_deno.mjs'
import * as pt from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.25/path.mjs'

import * as l from './live.mjs'

import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js'

import * as data from './data/data.js';
import * as book from './data/data-books.js'
import * as cheese from './data/data-cheese.js'

const {E} = new p.Ren(dg.document).patchProto(dg.glob.Element)

const DEV = Deno.args.includes(`--dev`)

class Page extends a.Emp {
  constructor(site) {
    // console.log(site)
    super()
    this.site = a.reqInst(site, Site)
  }

  urlPath() {return ``}

  fsPath() {
    const path = a.laxStr(this.urlPath())
    return path && a.stripPre(path, `/`) + `.html`
  }

  targetPath() {
    const path = a.laxStr(this.fsPath())
    return path && pt.posix.join(`target`, path)
  }

  title() {return ``}

  res() {return a.resBui().html(this.body()).res()}

  body() {return ``}

  
  async write() {
    const path = pt.toPosix(this.targetPath())
    if (!path) return

    const body = this.body()
    if (!body) return

    await Deno.mkdir(pt.posix.dir(path), {recursive: true})
    // console.log(path)
    // console.log(pt.dir(path))
    await Deno.writeTextFile(path, body)

    console.log(`[html] wrote`, path)
  }
}

// 404 //
class Page404 extends Page {
  // Only for `Nav`.
  urlPath() {return `404`}
  fsPath() {return `404.html`}
  title() {return `Страница не найдена`}
  res() {return a.resBui().html(this.body()).code(404).res()}

  body() {
    const tit = `Ошбика: 404`
    const desc = `Ошбика 404`
    const img = `https://sirseverin.ru/images/severin404.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      E.main.chi(
        E.h1.chi(this.title()),
        E.a.props({href: `/`, class: `error`}).chi(`Вернуться на главную`,
          E.img.props({alt: `Severin404`, src: `/images/severin404.jpg`, class: `error`})
        )        
      ),
      Footer(this)
    )
  }
}


// Main //
class PageIndex extends Page {
  urlPath() {return `/`}
  fsPath() {return `index.html`}
  title() {return `Главная`}

  body() {
  const principe =  Deno.readTextFileSync(`./data/principe.md`)
  const tit = `Северин Богучарский`
  const desc = `Северин Богучарский — личный сайт. Публикации, блог, обзоры книг.`
  const img = `https://sirseverin.ru/images/severin.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      // E.main.chi(
      //   E.aboutme.chi(E.img.props({src: `/images/severin.jpg`, alt: `Severin Bogucharskiy`}), E.h1.chi(`Северин Богучарский`)),
      // ),
      E.aboutme.props({id: `aboutme`}).chi(
        // E.div.chi(new p.Raw(marked(principe))),
        // E.button.props({class: `close-about`, id: `close-about`}).chi(`☓`),
        E.h1.chi(`Северин Богучарский`),
        E.img.props({src: `/images/severin-2.jpg`, alt: `Severin Bogucharskiy`}),
      ),
      // E.div.props({id: `canvas-container`}),
      E.principe.props({id: `principe`}).chi(
        // E.div.chi(new p.Raw(marked(principe))),
        // E.img.props({src: `/images/severin-2.jpg`, alt: `Severin Bogucharskiy`}),
      ),
      FooterMain(this),
    )
  }
}
// Severin's room //
class PageRoom extends Page {
  urlPath() {return `/room`}
  fsPath() {return `room.html`}
  title() {return `3D Severin's room`}

  body() {
  const principe =  Deno.readTextFileSync(`./data/principe.md`)
  const tit = `3D Severin's room`
  const desc = `Виртуальная 3D комната.`
  const img = `https://sirseverin.ru/images/severin.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      E.div.props({id: `canvas-container`}),
      FooterMain(this),
    )
  }
}
// class PageIndex extends Page {
//   urlPath() {return `/`}
//   fsPath() {return `room.html`}
//   title() {return `Severin's room`}

//   body() {
//   const principe =  Deno.readTextFileSync(`./data/principe.md`)
//   const tit = `Severin's room`
//   const desc = `Северин Богучарский — личный сайт. Публикации, блог, обзоры книг.`
//   const img = `https://sirseverin.ru/images/severin.jpg`
//     return Layout(tit, desc, img,
//       Nav(this),
//       // E.main.chi(
//       //   E.aboutme.chi(E.img.props({src: `/images/severin.jpg`, alt: `Severin Bogucharskiy`}), E.h1.chi(`Северин Богучарский`)),
//       // ),
//       E.aboutme.props({id: `aboutme`}).chi(
//         E.div.chi(new p.Raw(marked(principe))),
//         E.img.props({src: `/images/severin-2.jpg`, alt: `Severin Bogucharskiy`}),
//         E.button.props({class: `close-about`, id: `close-about`}).chi(`☓`),
//       ),
//       E.div.props({id: `canvas-container`}),
//       E.principe.props({id: `principe`}).chi(
//         E.div.chi(new p.Raw(marked(principe))),
//         E.img.props({src: `/images/severin-2.jpg`, alt: `Severin Bogucharskiy`}),
//       ),
//       FooterMain(this),
//     )
//   }
// }
// class PageIndex extends Page {
//   urlPath() {return `/`}
//   fsPath() {return `index.html`}
//   title() {return `Главная`}

//   body() {
//   const principe =  Deno.readTextFileSync(`./data/principe.md`)
//   const tit = `Северин Богучарский`
//   const desc = `Северин Богучарский — личный сайт. Публикации, блог, обзоры книг, сырный каталог.`
//   const img = `https://sirseverin.ru/images/severin.jpg`
//     return Layout(tit, desc, img,
//       Nav(this),
//       E.main.chi(
//         E.aboutme.chi(E.img.props({src: `/images/severin.jpg`, alt: `Severin Bogucharskiy`}), E.h1.chi(`Северин Богучарский`)),
//         E.principe.chi(E.div.chi(new p.Raw(marked(principe))))
//       ),
//       Footer(this),
//       // E.div.props({id: `container`}),
//     )
//   }
// }
// Blog //
class PageBlog extends Page {
  urlPath() {return `/blog`}
  title() {return `Блог`}

  body() {
    const tit = `Блог`
    const desc = `Личный блог. Рассуждения на разные темы. Мир. Путешествия`
    const img = `https://sirseverin.ru/images/severin.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      E.main.chi(
        // NavBlog(this),
        E.blog.chi(
          E.h2.chi(`Все публикации`),
          E.span.props({class: `help`}).chi(`Количество статей: ${data.list.length}`),
          AllTags(this),
            data.list.reverse().map((val) => {
            return E.div.props({id: val.id, dataindex: val.dataindex, class: `filter`}).chi(
              E.span.chi(val.date),
              E.a.props({href: `/blog/` + val.dataindex}).chi(
                E.h3.chi(val.h3),
                E.p.chi(val.p),
                E.img.props({alt: val.alt, src: val.src}),
              ),
              ArtTags(val.tags),
            )
          }
          )
        )
      ),
      Footer(this)
    )
  }
}

// class PageSubBlog extends Page {
//   constructor(site, sub) {
//     super(site)
//     this.sub = sub
//   }  

//   urlPath() {return `/blog/` + this.sub.dataindex}
//   title() {return this.sub.name}

//   body() {
//     const tit = this.sub.name
//     const desc = this.sub.desc
//     const img = `https://sirseverin.ru/images/severin.jpg`
//     return Layout(tit, desc, img,
//       Nav(this),
//       E.main.chi(
//         NavBlog(this),
//         E.blog.chi(
//           E.h2.chi(this.sub.name),
//           AllTags(this),
//           data.list.filter(val => this.sub.tags.every(tag => val.tags.includes(tag)))
//           .map((val) => {
//               return E.div.props({id: val.id, dataindex: val.dataindex, class: `filter`}).chi(
//                 E.span.chi(val.date),
//                 E.a.props({href: '/blog/' + val.dataindex}).chi(
//                   E.h3.chi(val.h3),
//                   E.p.chi(val.p),
//                   E.img.props({alt: val.alt, src: val.src}),
//                 ),
//                 ArtTags(val.tags),
//               )
//             }
//           )
//         )
//       ),
//       Footer(this)
//     )
//   }
// }

// function SubBlogs(site) {
//   const results = []
//   for (const val of data.bloglist) {
//     results.push(new PageSubBlog(site, val))
//   }
//   return results
// }

// Article //
class PageArticle extends Page {
  constructor(site, arti) {
    super(site)
    this.arti = arti
  }  
  
    urlPath() {return `/blog/` + this.arti.dataindex}
    title() {return this.arti.dataindex}
  
    body() {
    const art1 = Deno.readTextFileSync(this.arti.path)
    const tit = this.arti.h3
    const desc = this.arti.p
    const img = `https://sirseverin.ru/` + this.arti.src
    return Layout(tit, desc, img,
      Nav(this),
      E.main.chi(
        // NavBlog(this),
        E.article.chi(new p.Raw(marked(art1)))
      ),
      Footer(this)
    )
  }
}

function Articles(site) {
    const results = []
    for (const val of data.list) {
      results.push(new PageArticle(site, val))
    }
    return results
}

// Bookreview //
class PageBookreview extends Page {
  urlPath() {return `/bookreview`}
  title() {return `Обзоры книг`}

  body() {
    const tit = `Обзоры книг`
    const desc = `Обзоры прочитанных книг, с личным рейтингом.`
    const img = `https://sirseverin.ru/images/books.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      E.main.chi(
        E.div.props({class: `info-books`}).chi(
          E.h2.chi(`Краткие оценки прочитанных мною книг`),
          // E.img.props({src: `/images/books.jpg`, alt: `Books`, class: `img-info`}),
          E.search.chi(
            E.label.props({for: `searchInput`}),
            // E.label.props({for: `searchInput`}).chi(`Краткие оценки прочитанных мною книг`),
            E.div.chi(
              E.input.props({type: `text`, id: `searchInput`, placeholder: `Книга, автор, жанр...`}),
              E.button.props({id: `searchButton`, type: `submit`}).chi(
                E.img.props({src: `/images/search.svg`, alt: `s`, class: `img-svg`})
              )
            )
          ),
          BookTags(book.t),
        ),
        E.books.chi(
          book.b.map((val) => {
            return E.div.props({class: `book`, id: val.Id}).chi(
              E.span.chi(val.Id),
              E.h3.chi(val.name),
              E.p.chi(`Автор: ` + val.author),
              E.p.chi(`Жанр: ` + val.genre),
              E.p.chi(`Дата: ` + val.date),
              E.p.chi(val.description),
              E.p.chi(`Мой рейтинг: ` + val.rating),
              ArtTags(val.tags),
            )
          }
          )
        )
      ),
      Footer(this)
    )
  }
}
// Cheese //
class PageCheese extends Page {
  urlPath() {return `/cheese`}
  title() {return `Сыр`}

  body() {
    const acheese =  Deno.readTextFileSync(`./data/cheese.md`)
    const tit = `Сыр`
    const desc = `Список сыра, который возможно внедрить на производство.`
    const img = `https://sirseverin.ru/images/cheese.jpg`
    return Layout(tit, desc, img,
      Nav(this),
      E.main.chi(
        E.div.props({class: `info-cheeses`}).chi(
          E.h2.chi(`Сыр, который я умею делать`),
          E.div.props({class: `spoiler`}).chi(
            E.div.props({class: `spoiler-header`}).chi(
              E.span.props({class: `toggle-icon`}).chi(`▶`),
              E.p.chi(`Нажми чтобы прочитать подробности`),
            ),
            E.div.props({class: `spoiler-content`}).chi(
              new p.Raw(marked(acheese))
            ),
          ),
          BookTags(cheese.t),
          // E.img.props({src: `/images/cheese.jpg`, alt: `Cheese`, class: `img-cheese`}),
          // E.search.chi(
          //   E.label.props({for: `searchInput`}).chi(`Специализируюсь на производстве определённых видов сыра`),
          //   E.div.chi(
          //     E.input.props({type: `text`, id: `searchInput`, placeholder: `Найти сыр...`}),
          //     E.button.props({id: `searchButton`, type: `submit`}).chi(
          //       E.img.props({src: `/images/search.svg`, alt: `s`, class: `img-svg`})
          //     )
          //   )
          // ),
        ),
        E.books.chi(
          cheese.c.map((val) => {
            return E.div.props({class: `cheese`, id: val.Id}).chi(
              E.div.chi(
                E.span.chi(val.Id),
                E.h3.chi(val.name),
                E.p.chi(`Срок созревания: ` + val.age),
                E.p.chi(`Молоко: ` + val.milk),
                E.p.chi(`Первое упоминание: ` + val.since),
                E.p.chi(`Тип: ` + val.type),
                E.p.chi(`Вкус: ` + val.taste),
                E.p.chi(`Плесень: ` + val.mold),
                E.p.chi(`Описание: ` + val.description),
                ArtTags(val.tags),
              ),
              E.img.props({src: val.img, alt: val.name})
            )
          }
          )
        )
      ),
      Footer(this)
    )
  }
}


class Site extends a.Emp {
  constructor() {
    super()
    this.notFound = new Page404(this)
    this.cheese = new PageCheese(this)
    // this.nav = [new PageIndex(this), new PageBlog(this), new PageBookreview(this), new PageCheese(this)]
    this.nav = [new PageIndex(this), new PageBlog(this), new PageBookreview(this), new PageRoom(this)]
    // this.blogs = SubBlogs(this)
    this.articles = Articles(this)
    // console.log(`This`, this)
  }
  all() {return [this.notFound, this.cheese, ...this.nav, ...this.articles]}  
}
export const site = new Site()
// console.log(site.all())

const anal =  Deno.readTextFileSync(`./data/anal.md`)

function Layout(tit, desc, img, ...chi) {
  return p.renderDocument(
    E.html.chi(
      E.head.chi(
        E.meta.props({charset: `utf-8`}),
        E.meta.props({name: `viewport`, content: `width=device-width, initial-scale=1`}),
        E.title.chi(tit),
        E.meta.props({name: `description`, content: desc}),
        E.meta.props({name: `keywords`, content: `личный сайт, блог, путешествия, советы, фотографии, книги, социальные темы`}),
        E.meta.props({property: `og:title`, content: tit}),
        E.meta.props({property: `og:description`, content: desc}),
        E.meta.props({property: `og:type`, content: `website`}),
        E.meta.props({property: `og:site_name`, content: `sirseverin.ru`}),
        E.meta.props({property: `og:url`, content: `https://sirseverin.ru/`}),
        E.meta.props({property: `og:image`, content: img}),
        E.meta.props({property: `og:image:height`, content: `600`}),
        E.meta.props({property: `og:image:width`, content: `300`}),
        E.meta.props({property: `og:image:type`, content: `image/jpeg`}),
        E.link.props({rel: `icon`, type: `image/x-icon`, href: `/images/severin.ico`}),
        E.link.props({rel: `stylesheet`, href: `/main.css`}),
        // E.link.props({rel: `preconnect`, href: `https://fonts.googleapis.com`}),
        // E.link.props({rel: `preconnect`, href: `https://fonts.gstatic.com`, crossorigin: ``}),
        // E.link.props({rel: `stylesheet`, href: `https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap`}),
        E.style.chi(`@import url('https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV,SHRP@100..900,0..1,0..100&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');`),
        E.style.chi(`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');`),
        a.vac(DEV) && E.script.chi(`navigator.serviceWorker.register('/sw.mjs')`),
        new p.Raw(marked(anal))
      ),
      E.body.props({class: `dark-theme`}).chi(chi, 
        E.div.props({class: `popup`, id: `popup`}).chi(
          E.span.props({class: `close`, id: `closeBtn`}).chi(`☓`),
          E.div.props({class: `popup-content`}).chi(
          E.img.props({id: `popupImage`, src: ` `, alt: `Popup Image`})
        ))
      ),
      E.script.props({type: `importmap`}).chi(`  {
        "imports": {
          "three": "https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js",
          "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/"
        }
      }`),
      E.script.props({type: `module`, src: `/browser.mjs`, defer: ``}),
      E.script.props({type: `module`, src: `/3d.mjs`, defer: ``}),
      // E.script.props({type: `module`, src: `/site.mjs`}),
      a.vac(DEV) && E.script.props({type: `module`, src: l.LIVE_CLIENT}),
    )
  )
}

function Nav(page) {
  return E.header.chi(
    E.menu.chi(`☰`),
    E.mobilemenu.chi(
      E.div.chi(
        a.map(page.site.nav, PageLink),
        E.a.props({href: `https://statham.fun/`, target: `_blank`}).chi(`statham.fun`),
        E.a.props({href: `https://drinkibri.ru/`, target: `_blank`}).chi(`Напитки Ибри`),
      ),
      E.div.props({class: `mobilemenu-contact`}).chi(
        Contact(data.contact)),
    ),
    E.nav.chi(a.map(page.site.nav, PageLink), 
      E.a.props({href: `https://statham.fun/`, target: `_blank`}).chi(`statham.fun`),
      E.a.props({href: `https://drinkibri.ru/`, target: `_blank`}).chi(`Напитки Ибри`),
    ),
    // E.button.props({class: `minimal`, id: `minimal`}).chi(`простая версия сайта`)
    // E.h1.chi(E.a.props({href: `/`}).chi(`Северин Богучарский`))
      // E.button.props({id: `themeSwitcher`, class: `switch`}).chi(`☀`)
  )
}

function NavFooter(page) {
  return E.nav.chi(a.map(page.site.nav, PageLink)
    )
}

function NavBlog(page) {
  return E.nav.props({class: `nav-blog`}).chi(
    E.p.chi(`Категории блога:`),
    a.map(page.site.blogs, PageLink),
  )
}

const currentYear = new Date().getFullYear();
function Footer(page) {
  return E.footer.chi(
    E.p.chi(`Любое использование либо копирование материалов или подборки материалов сайта, 
      допускается только cо ссылкой на источник 
      www.sirseverin.ru и указанием авторства`),
    E.div.chi(
      Contact(data.contact)
    ),
    NavFooter(page),
    E.span.chi(E.a.props({href: `https://github.com/diatom/diatom.github.io`}).
    chi(`© ${currentYear}. Сайт сделал Severin B. 👾`)
    )
  )
}
function FooterMain(page) {
  return E.footermain.chi(
    E.div.chi(
      Contact(data.contact)
    ),
    E.span.chi(E.a.props({href: `https://github.com/diatom/diatom.github.io`}).
    chi(`© ${currentYear}. Сайт сделал Severin B. 👾`)
    )
  )
}

function PageLink(page) {
  a.reqInst(page, Page)
  const pro = {
    href: page.urlPath(),
    id: page.title(),
  }
  return E.a.props(pro).chi(page.title())
}

function Contact(cont) {
  return cont.map((val) => {
    for (let [key, value] of Object.entries(val)) {
      return E.a.props({href: value}).chi(key)
    }
  })
}

function AllTags(page) {
  return E.tags.chi(
    E.span.props({class: `help`}).chi(`Теги:`),
    data.arttags.map(val => 
      E.button.props({type: `button`, class: `btn`}).chi(E.span.chi(`#`), val)
    )
  )
}

function ArtTags(tag) {
  return E.arttags.chi(
    E.span.props({class: `help`}).chi(`Теги:`),
    tag.map((val) => 
      E.button.props({type: `button`, class: `btn`}).chi(E.span.chi(`#`), val)
    )
  )
}

function BookTags(tag) {
  return E.tags.chi(
    E.span.props({class: `help`}).chi(`Теги:`),
    tag.map(val => 
      E.button.props({type: `button`, class: `btn`}).chi(E.span.chi(`#`), val)
    )
  )
}