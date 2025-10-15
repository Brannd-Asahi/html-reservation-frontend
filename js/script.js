document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('videoCarousel');
    const videoBackground = document.querySelector('.video-background');
    const videos = document.querySelectorAll('.carousel-item video');

    function setBackgroundVideo(video) {
        const source = video.querySelector('source').src;
        videoBackground.src = source; // Asignar el mismo video al fondo
        videoBackground.play();
    }

    // Asignar el video activo al fondo cuando se carga la página
    setBackgroundVideo(videos[0]);

    // Actualizar el video de fondo cuando cambia el carrusel
    carousel.addEventListener('slid.bs.carousel', function(event) {
        const activeItem = carousel.querySelector('.carousel-item.active video');
        setBackgroundVideo(activeItem);
    });

    // Parte del formulario de reseñas
    const reseñaForm = document.getElementById('reseña-form');
    const reseñasContainer = document.getElementById('reseñas-container');

    // Obtener las reseñas almacenadas
    function cargarReseñas() {
        const reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
        reseñasContainer.innerHTML = ''; // Limpiar contenedor

        reseñas.forEach(reseña => {
            const reseñaDiv = document.createElement('div');
            reseñaDiv.classList.add('card', 'mb-3');
            reseñaDiv.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${reseña.nombre}</h5>
                    <p class="card-text">${reseña.comentario}</p>
                </div>
            `;
            reseñasContainer.appendChild(reseñaDiv);
        });
    }

    // Guardar una nueva reseña
    function agregarReseña(nombre, comentario) {
        const reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
        reseñas.push({ nombre, comentario });
        localStorage.setItem('reseñas', JSON.stringify(reseñas));
        cargarReseñas();
    }

    // Manejar el envío del formulario
    reseñaForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        agregarReseña(nombre, comentario);

        // Limpiar el formulario
        reseñaForm.reset();
    });

    // Cargar reseñas al cargar la página
    cargarReseñas();
});
document.addEventListener('DOMContentLoaded', function() {
    const reseñaForm = document.getElementById('reseña-form');
    const reseñasContainer = document.getElementById('reseñas-container');

    // Obtener las reseñas almacenadas
    function cargarReseñas() {
        const reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
        reseñasContainer.innerHTML = ''; // Limpiar contenedor

        reseñas.forEach(reseña => {
            const reseñaDiv = document.createElement('div');
            reseñaDiv.classList.add('card', 'mb-3');
            reseñaDiv.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${reseña.nombre}</h5>
                    <p class="card-text">${reseña.comentario}</p>
                </div>
            `;
            reseñasContainer.appendChild(reseñaDiv);
        });
    }

    // Guardar una nueva reseña
    function agregarReseña(nombre, comentario) {
        const reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
        reseñas.push({ nombre, comentario });
        localStorage.setItem('reseñas', JSON.stringify(reseñas));
        cargarReseñas();
    }

    // Manejar el envío del formulario
    reseñaForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        agregarReseña(nombre, comentario);

        // Limpiar el formulario
        reseñaForm.reset();
    });

    // Cargar reseñas al cargar la página
    cargarReseñas();
});
