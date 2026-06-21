document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // On the homepage, the navbar starts transparent over the dark hero image.
    // It becomes solid white once the user has scrolled past ~80% of the hero height,
    // so it's always solid before the showcase section becomes visible.
    const navbar = document.querySelector('.navbar');
    const isLandingPage = !!document.querySelector('.landing-page');
    if (navbar && isLandingPage) {
        const threshold = window.innerHeight * 0.8;
        const updateNav = () => {
            if (window.scrollY > threshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', updateNav, { passive: true });
    }
});
