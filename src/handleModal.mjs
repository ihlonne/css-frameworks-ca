export const handleModal = function () {
  const modal = document.getElementById('create-post-modal');
  const createPostButton = document.getElementById('open-create-post');
  const cancelModalButton = document.getElementById('cancel-modal');

  createPostButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('hidden');
  });

  cancelModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });

  const form = document.getElementById('create-post-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const successAlert = document.getElementById('success-alert');
    successAlert.classList.remove('hidden');
    setTimeout(() => successAlert.classList.add('hidden'), 3000);
    modal.classList.add('hidden');
    form.reset();
  });
};
