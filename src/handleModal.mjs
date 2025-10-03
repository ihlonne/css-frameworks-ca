export const handleModal = function () {
  const modal = document.getElementById('create-post-modal');
  const createPostLink = document.querySelector('a[href="/create-post/"]');
  const cancelModalButton = document.getElementById('cancel-modal');

  // Open the modal
  createPostLink.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('hidden');
  });

  // Close the modal
  cancelModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close the modal when clicking outside it
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Optional: Close the modal with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });

  // Handle the form submission
  const form = document.getElementById('create-post-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Show success notification
    const successAlert = document.getElementById('success-alert');
    successAlert.classList.remove('hidden'); // Show the notification

    setTimeout(() => {
      successAlert.classList.add('hidden');
    }, 3000);

    modal.classList.add('hidden');

    form.reset();
  });
};
