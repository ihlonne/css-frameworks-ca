export const hamburgerButton = document.getElementById('hamburger');
const closeButton = document.getElementById('close-navbar');
const menu = document.getElementById('navbar');
export const handleHamburger = function () {
  hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Show/hide menu
    hamburgerButton.classList.add('hidden'); // Hide hamburger button
    closeButton.classList.remove('hidden'); // Show close button
  });

  closeButton.addEventListener('click', () => {
    menu.classList.add('hidden'); // Hide menu
    closeButton.classList.add('hidden'); // Hide close button
    hamburgerButton.classList.remove('hidden'); // Show hamburger button
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== hamburgerButton) {
      menu.classList.add('hidden'); // Hide menu
      closeButton.classList.add('hidden'); // Hide close button
      hamburgerButton.classList.remove('hidden'); // Show hamburger button
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.classList.add('hidden'); // Hide menu
      closeButton.classList.add('hidden'); // Hide close button
      hamburgerButton.classList.remove('hidden'); // Show hamburger button
    }
  });
};
