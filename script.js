document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Navbar scroll effect
    if (header) {
        // Initial check in case user loaded page half-scrolled
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }

        window.addEventListener('scroll', () => {
            // For pages where the header starts dark, we handle it via inline styles.
            // .scrolled class forces background to be dark and adds shadow.
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Custom logic to handle the transition
    const animatedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initial state for animation target elements
    const elementsToAnimate = document.querySelectorAll('.dish-card, .section-title, .quote-container blockquote, .menu-item, .info-item, .res-form');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        animatedObserver.observe(el);
    });
});
