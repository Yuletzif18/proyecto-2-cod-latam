// Obtener el botón del menú y el menú principal
const botonMenu = document.querySelector('.boton-menu');
const menuPrincipal = document.querySelector('.menu-principal');

// Agregar el evento de clic al botón del menú
botonMenu.addEventListener('click', mostrarOcultarMenu);

// Función para mostrar u ocultar el menú
function mostrarOcultarMenu() {
    menuPrincipal.classList.toggle('mostrar-menu');
}

// Mostrar el menú al pasar el mouse sobre el botón
botonMenu.addEventListener('mouseenter', function() {
    menuPrincipal.classList.add('mostrar-menu');
});

