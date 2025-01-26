export const signInForm = document.getElementById('sign-in-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showSignInLink = document.getElementById('show-sign-in');
const signInButton = document.getElementById('sign-in-button');
const registerButton = document.getElementById('register-button');
export const handleLogin = function () {
  // Show the register form and hide the sign-in form
  showRegisterLink.addEventListener('click', (event) => {
    event.preventDefault();
    signInForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  // Show the sign-in form and hide the register form
  showSignInLink.addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
  });

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
  });

  signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/feed/';
  });
};
