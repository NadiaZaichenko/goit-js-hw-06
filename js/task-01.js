// Витягуваня посилання на всі li.item 
const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
// Виклик методу перебирає items, збираючи та додаючи для кожного item посилання на назву категорії, та на кількість li в ній
allItems.forEach((element) => {
 const categoryRef = element.querySelector('h2').textContent;
    const elemRef = element.querySelectorAll('li').length;
    console.log(`Category: ${categoryRef} \nElement: ${elemRef}`);
})