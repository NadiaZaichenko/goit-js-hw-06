// Дістаю посилання
const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text')
spanElem.style.fontSize = inputElem.value + 'px';
// Чіпляю слухача
inputElem.addEventListener('input', changeFunction);

// Прописую колбек функцію
function changeFunction(event) {
    spanElem.style.fontSize = event.currentTarget.value + 'px';
}
