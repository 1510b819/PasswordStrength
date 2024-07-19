document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 0;

    // Check password length
    if (password.length >= 8) strength += 1;

    // Check for numbers
    if (/\d/.test(password)) strength += 1;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength += 1;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength += 1;

    // Check for special characters
    if (/[@$!%*?&]/.test(password)) strength += 1;

    // Set strength bar width and text based on strength
    switch (strength) {
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            strengthText.textContent = 'Password Strength: Weak';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'orange';
            strengthText.textContent = 'Password Strength: Fair';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = 'yellow';
            strengthText.textContent = 'Password Strength: Good';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'lightgreen';
            strengthText.textContent = 'Password Strength: Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            strengthText.textContent = 'Password Strength: Very Strong';
            break;
        default:
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = 'grey';
            strengthText.textContent = 'Password Strength: Not Entered';
            break;
    }
});

document.getElementById('toggle-visibility').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const isPasswordVisible = passwordInput.type === 'text';

    if (isPasswordVisible) {
        passwordInput.type = 'password';
        this.classList.remove('hide');
        this.setAttribute('aria-label', 'Show password');
    } else {
        passwordInput.type = 'text';
        this.classList.add('hide');
        this.setAttribute('aria-label', 'Hide password');
    }
});
