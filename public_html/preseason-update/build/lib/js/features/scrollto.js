require('smoothscroll-polyfill').polyfill();

const scrollTo = [...document.querySelectorAll('.js-scroll-to')];


scrollTo.forEach((node) => {
    node.addEventListener('click', () => {
        const target = document.querySelector(node.hash);

        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset),
                left: 0,
                behavior: 'smooth',
            });
        }
    });
});
