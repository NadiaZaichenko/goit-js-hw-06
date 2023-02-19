function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
  }`;
}

// Дістаємо потрібні посилання
const changeColorBtn = document.querySelector('.change-color')
const bodyRef = document.querySelector('body')
const spanColorRef = document.querySelector('.color')
// Чіпляю слухача подій
changeColorBtn.addEventListener('click', handleClick);
// Прописую колбек функцію
function handleClick () {
  let colorRandom = getRandomHexColor()
  bodyRef.style.backgroundColor = colorRandom;
spanColorRef.textContent = colorRandom;
}