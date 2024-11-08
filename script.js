// Mostrar una alerta cuando se hace clic en el botón
document.getElementById("alertButton").addEventListener("click", function() {
    alert("¡Más información próximamente en nuestro sitio oficial!");
});

// Al cargar la página, muestra una alerta de bienvenida
window.onload = function() {
    alert("¡Bienvenido a la página de prueba de Hass Home Solution!");
};

// Validación del formulario (ejemplo)
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (!nombre || !email) {
        event.preventDefault();
        alert("Por favor, complete todos los campos.");
    }
});
