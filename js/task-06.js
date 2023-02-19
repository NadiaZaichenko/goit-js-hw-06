// Отримую посилання на елемент
const inputRef = document.querySelector('#validation-input')

// Оголошую змінну з значенням допустимої довжини
const maxLength = +inputRef.dataset.length;

// Створюю функцію Для виконання умови
function elementBlur() {
    if(inputRef.value.length === maxLength){
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
}

// Чіпляю колбек
inputRef.addEventListener('blur', elementBlur)
