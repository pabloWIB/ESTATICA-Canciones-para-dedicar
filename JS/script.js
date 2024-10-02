document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    
    burger.addEventListener('click', function() {
        // Cambia la imagen de la hamburguesa al hacer clic
        if (burger.src.includes('menu.svg')) {
            burger.src = 'IMG/WEB IMAGES/ICONOS/menu-open.svg'; // Cambia a la segunda imagen
        } else {
            burger.src = 'IMG/WEB IMAGES/ICONOS/menu.svg'; // Vuelve a la primera imagen
        }
    });
});

