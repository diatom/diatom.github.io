// Как сделать генерацию новых http адресов на веб-сайте по нажатию кнопки с помощью JavaScript?   
// Для создания генерации новых HTTP-адресов на веб-сайте с помощью JavaScript, вы можете использовать следующий код:

// Функция для генерации случайного HTTP-адреса
function generateRandomHttpAddress() {
    let httpAddress = Math.floor(Math.random() * 100) + 1;
    return "http://example.com/" + httpAddress;
}

// Кнопка для генерации нового HTTP-адреса
const generateButton = document.getElementById("generate-button");

// Обработка нажатия на кнопку
generateButton.addEventListener("click", () => {
    console.log(generateRandomHttpAddress());
});

// Пример использования: вывод сгенерированного HTTP-адреса в консоли браузера
document.addEventListener("DOMContentLoaded", () => {
    generateButton.dispatchEvent(new Event("click"));
});  
// В этом коде мы создаем функцию generateRandomHttpAddress, которая генерирует случайный HTTP-адрес, и кнопку с ID “generate-button”. При нажатии на кнопку вызывается функция generateRandomHttpAddress и сгенерированный HTTP-адрес выводится в консоли браузера.

// Можно ли использовать этот пример для перехода на конкретный адрес?
// Например:
// http://example.com/Main
// http://example.com/Blog
// http://example.com/Book review
// http://example.com/Cheese   
// Да, можно. Для этого нужно изменить функцию generateRandomHttpAddress таким образом, чтобы она принимала параметр - путь, который нужно добавить к базовому URL (в данном случае, http://example.com/).

// Вот пример такой функции:

function generateRandomHttpAddress(path) {
  let httpAddress = path;
  const segments = path.split("/");
  if (segments[segments.length - 1]) {
    httpAddress += Math.floor(Math.random() * 100) + 1 + segments[segments.length - 1];
  } else {
    httpAddress += Math.floor(Math.random() * 100) + 1;
  }
  return "http://example.com/" + httpAddress;
}
// Теперь вы можете вызывать эту функцию с разными значениями для path (например, /Main, /Blog, и т.д.), и она будет генерировать разные URL.

// Спасибо. Как переделать эту функцию, чтобы она была без упоминания конкретного сайта "http://example.com/" ?
// Потому что веб-сайт находится на стадии разработки и я не знаю, какой будет точный URL сайта   
// Вы можете заменить "http://example.com/" на window.location.origin, который содержит текущий URL сайта:

function generateRandomHttpAddress(path) {
  let httpAddress = window.location.origin + path;
  ``
  return httpAddress;
}



// Example. Register a custom element with a method that takes parameters
customElements.define("my-element", class MyElement extends HTMLElement {
  constructor() {
    super()
  }
  setParams(params) {
    // Do something with the parameters
    this.innerHTML = `<style>div { color: ${params.color} }</style>`
  }
  render() {
    return `
      <style>
        div {
          color: ${this.params.color}
        }
      </style>
      <div>${this.params.message}</div>
    `
  }
})
// Usage
const elem = document.createElement("my-element");
elem.params = { color: "red", message: "Hello, world!" };
elem.setParams(elem.params);
document.body.appendChild(elem);