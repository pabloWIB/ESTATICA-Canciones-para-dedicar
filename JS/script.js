let showPassword = false;

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    showPassword = !showPassword;
    passwordInput.type = showPassword ? 'text' : 'password';
    toggleIcon.src = showPassword ? 'IMG/visibility_off_24dp_C7D2D6_FILL0_wght400_GRAD0_opsz24.svg' : 'IMG/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
    toggleIcon.alt = showPassword ? 'Hide password' : 'Show password';
}

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Por favor, comunícate al área de desarrollo.');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        window.location.href = '../admin.html'; 
    } else {
        alert('Por favor, completa ambos campos.');
    }
});
