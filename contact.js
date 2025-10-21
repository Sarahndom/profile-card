document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    // Input fields
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');

    // Error message containers
    const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
    const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
    const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
    const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        // PREVENT default form submission to stop page reload
        event.preventDefault();

        let isValid = true;

        // --- Reset all errors ---
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        successMessage.style.display = 'none';

        // --- Validate Name ---
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Full name is required.';
            isValid = false;
        }

        // --- Validate Email ---
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Email must be a valid format (e.g., name@example.com).';
            isValid = false;
        }

        // --- Validate Subject ---
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required.';
            isValid = false;
        }

        // --- Validate Message ---
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            isValid = false;
        }

        // --- Handle Success ---
        if (isValid) {
            successMessage.style.display = 'block'; // Show success message
            form.reset(); // Clear the form fields
        }
    });
});