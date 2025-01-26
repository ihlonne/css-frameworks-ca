export const handleModal = function () {
  const modal = document.getElementById('create-post-modal');
  const createPostLink = document.querySelector('a[href="/create-post/"]');
  const cancelModalButton = document.getElementById('cancel-modal');

  // Open the modal
  createPostLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    modal.classList.remove('hidden'); // Show the modal
  });

  // Close the modal
  cancelModalButton.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide the modal
  });

  // Close the modal when clicking outside it
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden'); // Hide the modal
    }
  });

  // Optional: Close the modal with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.add('hidden'); // Hide the modal
    }
  });

  // Handle the form submission
  const form = document.getElementById('create-post-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Show success notification
    const successAlert = document.getElementById('success-alert');
    successAlert.classList.remove('hidden'); // Show the notification

    // Hide the alert after 3 seconds
    setTimeout(() => {
      successAlert.classList.add('hidden');
    }, 3000);

    // Hide the modal
    modal.classList.add('hidden');

    // Clear the form fields
    form.reset();
  });
};
