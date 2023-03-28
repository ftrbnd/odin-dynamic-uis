window.onload = function () {
    window.addEventListener('scroll', e => {
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('is-scrolling');
        } else {
            document.querySelector('header').classList.remove('is-scrolling');
        }
    });

    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });
}