// Get the elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registerButton = document.getElementById('register-button');

// Add event listeners
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        alert(`Iniciar sesión con:\nEmail: ${email}\nContraseña: ${password}`);
    } else {
        alert('Por favor, complete todos los campos');
    }
});

registerButton.addEventListener('click', function() {
    alert("Redirigiendo a la página de registro...");
}); function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
}