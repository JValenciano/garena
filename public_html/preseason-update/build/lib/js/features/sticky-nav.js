import scrollMonitor from 'scrollmonitor';


const stickyNav = document.querySelector('.js-sticky-nav');
let stickyNavContent = null;


function fix() {
    stickyNav.style.paddingTop = `${stickyNavContent.offsetHeight}px`;
    stickyNavContent.classList.add('is-fixed');
}

function unfix() {
    stickyNav.style.paddingTop = '';
    stickyNavContent.classList.remove('is-fixed');
}

if (stickyNav) {
    stickyNavContent = stickyNav.querySelector('.js-sticky-nav__content');

    const elementWatcher = scrollMonitor.create(stickyNav);

    elementWatcher.partiallyExitViewport(fix);
    elementWatcher.fullyEnterViewport(unfix);

    if (!elementWatcher.isFullyInViewport) {
        fix();
    }
}
