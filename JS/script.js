let showPassword = false;

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    showPassword = !showPassword;
    passwordInput.type = showPassword ? 'text' : 'password';
    toggleIcon.src = showPassword ? 'IMG/visibility_off_24dp_C7D2D6_FILL0_wght400_GRAD0_opsz24.svg' : 'IMG/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
    toggleIcon.alt = showPassword ? 'Hide password' : 'Show password';
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle login submission
});