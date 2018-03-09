import scrollMonitor from 'scrollmonitor';


const heroBackdrop = document.querySelector('.js-hero-backdrop');
let frame = null;


function position() {
    heroBackdrop.style.transform = `translate3d(0, ${Math.floor(scrollMonitor.viewportTop * 0.35)}px, 0)`;

    frame = window.requestAnimationFrame(position);
}

if (heroBackdrop) {
    const elementWatcher = scrollMonitor.create(heroBackdrop);


    if (elementWatcher) {
        elementWatcher.enterViewport(position);

        elementWatcher.exitViewport(() => {
            window.cancelAnimationFrame(frame);
        });
    }
}
