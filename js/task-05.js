// Дістаємо посилання на інпут та спам
const textInputRef = document.querySelector("#name-input");

const outputRef = document.querySelector("#name-output");
const defaultName = outputRef.textContent;

// Чіпляємо слухача
 textInputRef.addEventListener("input", onInputChange);
// Колбек функція з умовою if
 function onInputChange(event) {
   if (event.currentTarget.value === "") {
    outputRef.textContent = defaultName;
   } else {
    outputRef.textContent = event.currentTarget.value;
   }
 }
