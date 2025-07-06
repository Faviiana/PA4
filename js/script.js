document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                
                alert('Formulario enviado correctamente (simulado).');
               
                event.preventDefault(); 
                contactForm.reset(); 
                contactForm.classList.remove('was-validated'); 
            }
            contactForm.classList.add('was-validated'); 
        }, false);
    }

    
});