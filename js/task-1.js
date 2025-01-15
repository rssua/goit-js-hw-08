const items = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item =>
  console.log(`Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`)
);
