const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}


const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', { delay: 200, origin: 'top' })
sr.reveal('.hero-img', { delay: 450, origin: 'top' })
sr.reveal('.icons', { delay: 500, origin: 'left' })
sr.reveal('.scroll-down', { delay: 450, origin: 'right' })
sr.reveal('.skills', { delay: 450, origin: 'right' })
sr.reveal('.tabla', { delay: 450, origin: 'right' })
sr.reveal('.powerbi', { delay: 450, origin: 'right' });
sr.reveal('.icons2', { delay: 450, origin: 'left' });

// JavaScript para agregar clase 'sticky' cuando se hace scroll
window.onscroll = function() { toggleStickyHeader() };

function toggleStickyHeader() {
    var header = document.getElementById("header");

    // Si la página ha sido desplazada más de 50px, se agrega la clase 'sticky'
    if (window.pageYOffset > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Obtener el modal y los botones de cierre
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalImage = document.getElementById('modal-image');

// Obtener todas las imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item');

// Agregar un event listener a cada imagen de la galería
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Cuando se hace clic en una imagen, mostrar el modal
        modal.style.display = 'flex'; // Cambiar a 'flex' para que se muestre
        modalImage.src = this.src; // Establecer la fuente de la imagen en el modal
    });
});

// Función para cerrar el modal cuando se hace clic en el botón de cierre
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar el modal
});

// También cerrar el modal si el usuario hace clic fuera de la imagen (en el área oscura)
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Si el clic es fuera de la imagen, cierra el modal
    }
});