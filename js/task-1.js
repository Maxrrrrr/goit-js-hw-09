const categories = document.querySelector('#categories');


const categoriesCount = categories.querySelectorAll('.item').length;
console.log(`Кількість категорій: ${categoriesCount}`);


for (const category of categories.querySelectorAll('.item')) {

  const categoryTitle = category.querySelector('h2').textContent;


  const categoryItemsCount = category.querySelectorAll('li').length;


  console.log(`Категорія: ${categoryTitle}, кількість елементів: ${categoryItemsCount}`);
}
