const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function(event) {
  const expectedLength = event.target.getAttribute("data-length");
  const actualLength = event.target.value.length;

  if (actualLength !== parseInt(expectedLength)) {
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
