// Дістаємо посилання на елементи 
const counterRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
// Створюємо ініціалізовану змінну
let counterValue = 0;
// Створюємо функціїї в яких присвоюється в textContent змінна на якій відбувається дія "+" або "-"
const setCounterDecrement = () => counterRef.textContent = counterValue -= 1;
const setCounterIncrement = () => counterRef.textContent = counterValue += 1;
// Чіпляємо слухача на кнопки
decrementBtn.addEventListener('click', setCounterDecrement);
incrementBtn.addEventListener('click', setCounterIncrement);
