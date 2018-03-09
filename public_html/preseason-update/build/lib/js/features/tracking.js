import scrollMonitor from 'scrollmonitor';


import {
    pushToDataLayer,
} from '../helpers';

/**
 * Log node id to dataLayer when fully in viewport
 */
const scrollMarkers = [...document.querySelectorAll('.js-scroll-marker')];

if (scrollMarkers) {
    scrollMarkers.forEach((marker) => {
        const markerWatcher = scrollMonitor.create(marker);
        const event = {
            eventAction: 'Scroll',
            eventLabel: marker.id,
        };

        markerWatcher.fullyEnterViewport(() => {
            pushToDataLayer(event);
        });
    });
}


const pushClickNodes = [...document.querySelectorAll('.js-push-click')];

if (pushClickNodes) {
    pushClickNodes.forEach((node) => {
        const eventLabel = node.getAttribute('data-event-label');

        const event = {
            eventAction: 'Click',
            eventLabel,
        };

        node.addEventListener('click', () => {
            pushToDataLayer(event);
        });
    });
}
