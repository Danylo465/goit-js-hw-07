const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.querySelector('input[name="email"]');
const passwordInput = loginForm.querySelector('input[name="password"]');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log('Form data:', formData);
  loginForm.reset();
});
