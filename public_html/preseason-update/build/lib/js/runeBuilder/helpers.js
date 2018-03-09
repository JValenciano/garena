import findIndex from 'lodash/findIndex';
import {
    assetPath,
    pushToDataLayer,
} from '../helpers';


export const appNode = document.querySelector('#perks-app');


export function runeIconSrc(runeId) {
    // eslint-disable-next-line no-undef
    return assetPath(`/img/runeBuilder/runes/108x108/${runeId}.png`);
}


export const loadImage = src =>
    new Promise((resolve, reject) => {
        const tempImage = new Image();

        tempImage.onload = () => {
            resolve();
        };
        tempImage.onerror = () => {
            reject();
        };

        tempImage.src = src;
    });


export function validateBuild({ paths, primary, secondary }) {
    // If primary and secondary arn't set then we can't proceed and the build is invalid.
    if (!primary.slug || !secondary.slug) {
        return false;
    }

    const remainingPaths = paths.filter(path => path.name !== primary.name);

    // Build a config using data from primary and secondary.
    const config = [
        findIndex(paths, path => path.slug === primary.slug),
        primary.slots[0].choice,
        primary.slots[1].choice,
        primary.slots[2].choice,
        primary.slots[3].choice,
        findIndex(remainingPaths, path => path.slug === secondary.slug),
        secondary.slots.choices[0],
        secondary.slots.choices[1],
    ];

    const firstEmptyChoice = findIndex(config, slot => slot === -1);

    // If any slot has a value of -1 it's empty and the build is invalid
    if (firstEmptyChoice !== -1) {
        return false;
    }

    // If we have a valid build return a string of it's config.
    return config.join('');
}


export function facebookShare(link) {
    if (window.FB) {
        window.FB.ui({
            method: 'share',
            href: link,
            quote: window.i18n.runebuilder.share.headline,
            mobile_iframe: true,
        });

        const event = {
            eventAction: 'Share-Facebook',
            eventLabel: link,
        };

        pushToDataLayer(event);
    }
}

export function twitterShare(link) {
    const event = {
        eventAction: 'Share-Twitter',
        eventLabel: link,
    };

    pushToDataLayer(event);

    const encoded = encodeURIComponent(link);
    const href = `https://twitter.com/intent/tweet?text=${window.i18n.runebuilder.share.headline}&url=${encoded}`;
    window.open(href, '_blank');
}

export function vkShare(link) {
    const encoded = encodeURIComponent(link);
    const href = `http://vk.com/share.php?url=${encoded}&title=${window.i18n.runebuilder.share.headline}&description=${window.i18n.runebuilder.share.body}`;
    window.open(href);

    const event = {
        eventAction: 'Share-VK',
        eventLabel: link,
    };

    pushToDataLayer(event);
}

export function shareLink(link) {
    const event = {
        eventAction: 'Share-URL',
        eventLabel: link,
    };

    pushToDataLayer(event);
}
