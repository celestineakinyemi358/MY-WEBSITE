// Simple contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.getElementById('primary-navigation');

    if (menuToggle && navigation) {
        const closeMenu = function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
            navigation.classList.remove('is-open');
        };

        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
            menuToggle.setAttribute(
                'aria-label',
                isExpanded ? 'Open navigation menu' : 'Close navigation menu'
            );
            navigation.classList.toggle('is-open', !isExpanded);
        });

        navigation.addEventListener('click', function(event) {
            if (event.target instanceof Element && event.target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menuToggle.focus();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. I will get back to you soon!');
            contactForm.reset();
        });
    }
});
