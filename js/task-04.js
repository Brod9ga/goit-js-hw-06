let counterValue = 0;
const value = document.querySelector("#value");
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action = "increment"]');
btnDec.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
btnInc.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
