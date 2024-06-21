document.addEventListener('DOMContentLoaded', function() {
    // Funciones de validación y manejo de formularios
    function validateRegisterForm() {
        // Lógica de validación para el formulario de registro
    }

    function validateLoginForm() {
        // Lógica de validación para el formulario de inicio de sesión
    }

    function validateContactForm() {
        // Lógica de validación para el formulario de contacto
    }

    // Eventos de escucha para los formularios
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateRegisterForm()) {
                // Envío del formulario (puedes usar AJAX o submit tradicional)
                // Ejemplo: this.submit();
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateLoginForm()) {
                // Envío del formulario (puedes usar AJAX o submit tradicional)
                // Ejemplo: this.submit();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateContactForm()) {
                // Envío del formulario (puedes usar AJAX o submit tradicional)
                // Ejemplo: this.submit();
            }
        });
    }
});
