document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger lines
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // Scroll effect only applies on the homepage (landing page),
    // where the nav starts transparent over the dark hero image.
    // On inner pages the navbar always stays in .scrolled (white) state.
    const navbar = document.querySelector('.navbar');
    const isLandingPage = !!document.querySelector('.landing-page');
    if (navbar && isLandingPage) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
