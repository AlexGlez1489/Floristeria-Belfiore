document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0; // Última posición de scroll
    const navbar = document.querySelector('.navegacion'); // Selecciona la barra de navegación

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posición actual del scroll
        
        if (currentScrollTop > lastScrollTop) {
            // Si el usuario se desplaza hacia abajo
            navbar.style.top = '-80px'; // Ajusta el valor según la altura de tu barra de navegación
        } else {
            // Si el usuario se desplaza hacia arriba
            navbar.style.top = '0';
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Asegura que la última posición de scroll no sea negativa
    });
});


// Espera a que la ventana se haya cargado completamente
window.addEventListener('load', () => {
    // Oculta el loader después de la carga
    document.getElementById('loader').style.display = 'none';
});


// Codigo scroll para javascript

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces con la clase "smooth-scroll"
    var scrollLinks = document.querySelectorAll('.smooth-scroll');

    // Agrega un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el atributo href del enlace
            var targetId = this.getAttribute('href');
            
            // Obtiene la posición de la sección de destino
            var targetPosition = document.querySelector(targetId).offsetTop;
            
            // Desplaza suavemente la página hacia la sección de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

window.addEventListener('scroll', function() {
    var whatsappButton = document.querySelector('.whatsapp-fijo');
    var footer = document.querySelector('footer');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition <= windowHeight) {
        whatsappButton.classList.add('hidden');
    } else {
        whatsappButton.classList.remove('hidden');
    }
});

// Swiper


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.proyectos-container');
    const leftButton = document.getElementById('scroll-left');
    const rightButton = document.getElementById('scroll-right');
    const scrollAmount = 330; // Ajusta según el ancho de tus elementos

    // Manejar el clic en el botón de izquierda
    leftButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Manejar el clic en el botón de derecha
    rightButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Duplicar el contenido para efecto infinito
    const clone = container.innerHTML;
    container.innerHTML += clone;
});
