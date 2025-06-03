document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  function validateName(name) {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name);
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function showError(elementId, show) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = show ? 'block' : 'none';
  }

  nameInput.addEventListener('input', () => {
    showError('nameError', !validateName(nameInput.value));
  });

  emailInput.addEventListener('input', () => {
    showError('emailError', !validateEmail(emailInput.value));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateName(nameInput.value)) {
      showError('nameError', true);
      isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
      showError('emailError', true);
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
      showError('nameError', false);
      showError('emailError', false);
    }
  });
});
