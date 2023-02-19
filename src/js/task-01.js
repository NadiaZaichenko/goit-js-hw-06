// Витягуваня посилання на всі li.item 
const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
// Створення функціїї яка витягує посилання певного елемента, і його певної властивості 
Array.prototype.forEach.call(allItems, (element) => {
    const categoryRef = element.querySelector('h2').textContent;
    const elemRef = element.querySelectorAll('li').length;
    console.log(`Category: ${categoryRef} \nElement: ${elemRef}`);
 })


