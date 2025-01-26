import { hamburgerButton, handleHamburger } from './hamburger.mjs';
import { handleModal } from './handleModal.mjs';
import { handleLogin, signInForm } from './login';
import './style.css';

const main = async function () {
  if (hamburgerButton) {
    handleHamburger();
  }
  if (signInForm) {
    handleLogin();
  }

  handleModal();
};

main();
