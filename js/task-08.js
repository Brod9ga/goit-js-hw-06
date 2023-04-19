const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }
  
  const formData = { email, password };
  console.log(formData);
  
  event.currentTarget.reset();
}