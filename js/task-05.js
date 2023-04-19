const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
    const name = event.target.value;
  outputName.textContent = name;
});
