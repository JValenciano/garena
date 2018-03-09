import scrollMonitor from 'scrollmonitor';
import {
    assetPath,
} from '../helpers';

const imagesToLoad = [...document.querySelectorAll('.js-lazy-image')];
const backgroundsToLoad = [...document.querySelectorAll('.js-lazy-background')];
const timing = 300;


function loadImage(image) {
    return new Promise((resolve, reject) => {
        const tempImage = new Image();
        const dataSrc = image.getAttribute('data-src');

        if (!dataSrc) {
            reject(`No 'data-src' set on ${image}`);
        }

        tempImage.onload = () => {
            image.src = dataSrc;
            resolve();
        };

        tempImage.onerror = () => {
            reject();
        };

        tempImage.src = dataSrc;
    });
}


imagesToLoad.forEach((image) => {
    const elementWatcher = scrollMonitor.create(image, window.innerHeight * 0.5);
    const styles = window.getComputedStyle(image);
    const addTransition = styles.transition === 'all 0s ease 0s';

    image.style.opacity = 0;
    image.src = assetPath('/img/global/blank.gif');

    if (addTransition) {
        image.style.transition = `opacity ${timing}ms`;
    }

    elementWatcher.enterViewport(() => {
        loadImage(image)
            .then(() => {
                image.style.opacity = '';

                window.setTimeout(() => {
                    if (addTransition) {
                        image.style.transition = '';
                    }
                }, timing);

                // elementWatcher.destroy();
            });
    });
});


function loadBackgrounds() {
    backgroundsToLoad.forEach((node) => {
        node.style.background = '';
    });
}

window.addEventListener('load', loadBackgrounds);
