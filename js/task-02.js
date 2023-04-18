const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients")
const fragment = document.createDocumentFragment()
for (const igrredient of ingredients) {
  const liEl = document.createElement("li")
  liEl.textContent = igrredient
  liEl.classList.add('item')
  fragment.appendChild(liEl)
  
}
ulEl.appendChild(fragment)