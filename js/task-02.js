const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const listArray = [];

ingredients.forEach(ingredient => {
  const items = document.createElement('li');
  items.classList.add('item');
  items.textContent = ingredient;

  listArray.push(items);
});

listEl.append(...listArray);

console.log(ingredients)
