import scrollMonitor from 'scrollmonitor';


const items = [...document.querySelectorAll('.js-active-in-view')];


items.forEach((item) => {
    const elementWatcher = scrollMonitor.create(item, window.innerHeight * 0.1);

    elementWatcher.enterViewport(() => {
        item.classList.add('is-active');
        elementWatcher.destroy();
    });
});
