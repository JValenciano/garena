
/* global versionedAssetPath:true */
export function assetPath(path) {
    return `${versionedAssetPath}${path}`;
}


const analyticsEvent = {
    event: 'analyticsEvent',
    eventCategory: 'Preseason-Update',
};

export function pushToDataLayer(event) {
    if (typeof window.dataLayer.push === 'function') {
        const pushedEvent = {
            ...analyticsEvent,
            ...event,
        };

        if (process.env.NODE_ENV !== 'production') {
            console.log(pushedEvent);
        }
        window.dataLayer.push(pushedEvent);
    }
}


export default {
    assetPath,
    pushToDataLayer,
};
