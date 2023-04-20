const itemEl = document.querySelectorAll(".item");
const h2ItemEl = document.querySelectorAll(".item h2");
const liItemEl = document.querySelectorAll(".item ul li");
// console.log(itemEl);
// console.log(liItemEl);
console.log(`Number of categories: ${itemEl.length}\n `);

itemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}\n `);
  
});
