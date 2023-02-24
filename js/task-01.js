const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
  let itemEl = `Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}
`;

  console.log(itemEl);
});