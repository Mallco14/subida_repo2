// Inicia animaciones AOS al cargar
AOS.init({
    duration: 1200,
    once: true,
});

// Muestra la invitación y aplica animaciones al hacer clic en el botón
document.querySelector('.btn').addEventListener('click', () => {
    const invitationSection = document.querySelector('.invitation-section');
    
    // Cambia la visibilidad de la invitación y la muestra con un fade-in
    invitationSection.style.display = 'block';
    setTimeout(() => {
        invitationSection.style.opacity = '1';
        
        // Añade efectos de animación usando Animate.css
        document.querySelector('.invitation-title').classList.add('animate__fadeInUp');
        document.querySelectorAll('.invitation-details').forEach((detail, index) => {
            setTimeout(() => {
                detail.classList.add('animate__fadeInUp');
            }, index * 300); // Cada detalle aparecerá con un pequeño retraso
        });
        
        // Animación para la frase romántica
        setTimeout(() => {
            document.querySelector('.romantic-quote').classList.add('animate__heartBeat');
        }, 1200); // La frase aparecerá al final
    }, 10);
});
