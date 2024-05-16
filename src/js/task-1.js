const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item'); 

const categoryCount = categoryItems.length;
console.log(`Кількість категорій: ${categoryCount}`);

for (const categoryItem of categoryItems) {
  const categoryTitle = categoryItem.querySelector('h2').textContent; 
  const categoryElements = categoryItem.querySelectorAll('li'); 
  const elementCount = categoryElements.length; 

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${elementCount}`);
}