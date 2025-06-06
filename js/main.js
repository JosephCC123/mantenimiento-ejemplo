document.addEventListener('DOMContentLoaded', function() {

    // --- Animación de Scroll para las tarjetas ---
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // el viewport
        rootMargin: '0px',
        threshold: 0.1 // se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento una vez que ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada tarjeta
    if (cards.length) {
        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // --- Lógica del botón de saludo (si existe en la página) ---
    // (Conservamos el ejemplo original para demostrar la modularidad)
    const saludoBtn = document.getElementById('saludoBtn');
    if (saludoBtn) {
        saludoBtn.addEventListener('click', () => {
            alert('¡Gracias por explorar el cosmos con nosotros!');
        });
    }

});