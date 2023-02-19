const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Перебирання масиву методом map() в якому створюється li
const liListRef = ingredients.map((ingredient) => {
const liRef = document.createElement('li');
liRef.textContent = ingredient;
liRef.classList.add('item');
return liRef
})
// Витягування посилання на список та Додавання створенного списку до DOM
const ulRef = document.querySelector('ul#ingredients');
ulRef.append(...liListRef);
console.log(ulRef);
