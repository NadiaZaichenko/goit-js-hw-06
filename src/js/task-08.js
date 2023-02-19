// Витягла посилання на форму
const form = document.querySelector('.login-form');

// Повісила слухала подій
form.addEventListener('submit', handleSubmit) ;
// Прописала колбек функцію
function handleSubmit(event) {
  event.preventDefault();
  const 
   { email, password }
   = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert('Заповніть будь ласка всі поля');
  }
console.log({email: email.value, password: password.value});
event.currentTarget.reset();
}
