const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});

const listItems = document.querySelectorAll('#categories li');

listItems.forEach(item => {
  if (!item.classList.length) {
    item.classList.add('item-unit');
  }
});
