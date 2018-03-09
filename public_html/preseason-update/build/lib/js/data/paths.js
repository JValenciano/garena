import {
    assetPath,
} from '../helpers';


export default [
    {
        slug: 'resolve',
        id: 8400,
        landing: {
            glow: assetPath('/img/runeBuilder/assets/Resolve/glow-r.png'),
            icon: assetPath('/img/runeBuilder/assets/Resolve/icon-r.png'),
            vfx: assetPath('/img/runeBuilder/assets/Resolve/vfx-r.png'),
        },
        construct: assetPath('/img/runeBuilder/assets/construct/8400'),
        icon: assetPath('/img/runeBuilder/runes/resolve/icon-r-36x36.png'),
        colors: {
            title: '#a1d586',
            gradient: {
                top: '#a1d586',
                bottom: '#a4d08d',
            },
        },
        videos: {
            8437: '7HfWqtiLgug', // Grasp Of The Undying
            8436: 'fXHbN6e0biQ', // Guardian
            8439: 'k04J5F7BSG0', // Aftershock
        },
    },
    {
        slug: 'domination',
        id: 8100,
        construct: assetPath('/img/runeBuilder/assets/construct/8100'),
        landing: {
            glow: assetPath('/img/runeBuilder/assets/Domination/glow-d.png'),
            icon: assetPath('/img/runeBuilder/assets/Domination/icon-d.png'),
            vfx: assetPath('/img/runeBuilder/assets/Domination/vfx-d.png'),
        },
        icon: assetPath('/img/runeBuilder/runes/domination/icon-d-36x36.png'),
        colors: {
            title: '#d44242',
            gradient: {
                top: '#d44242',
                bottom: '#dc4747',
            },
        },
        videos: {
            8112: 'eAYgLNxEXL4', // Electrocute
            8124: '8-5htdt-ohg', // Predator
            8128: 'fKKTvyoaMu4', // Dark Harvest
        },
    },
    {
        slug: 'precision',
        id: 8000,
        construct: assetPath('/img/runeBuilder/assets/construct/8000'),
        landing: {
            glow: assetPath('/img/runeBuilder/assets/Precision/glow-p.png'),
            icon: assetPath('/img/runeBuilder/assets/Precision/icon-p.png'),
            vfx: assetPath('/img/runeBuilder/assets/Precision/vfx-p.png'),
        },
        icon: assetPath('/img/runeBuilder/runes/precision/icon-p-36x36.png'),
        colors: {
            title: '#c8aa6e',
            gradient: {
                top: '#c8aa6e',
                bottom: '#aea789',
            },
        },
        videos: {
            8003: 'PTQLTMSZr-k', // Press The Attack
            8008: 'iA8OK5evk6w', // Lethal Tempo
            8021: 'nbD_xmQIYRM', // Fleet Footwork
        },
    },
    {
        slug: 'sorcery',
        id: 8200,
        construct: assetPath('/img/runeBuilder/assets/construct/8200'),
        landing: {
            glow: assetPath('/img/runeBuilder/assets/Sorcery/glow-s.png'),
            icon: assetPath('/img/runeBuilder/assets/Sorcery/icon-s.png'),
            vfx: assetPath('/img/runeBuilder/assets/Sorcery/vfx-s.png'),
        },
        icon: assetPath('/img/runeBuilder/runes/sorcery/icon-s-36x36.png'),
        colors: {
            title: '#9faafc',
            gradient: {
                top: '#9faafc',
                bottom: '#6c75f5',
            },
        },
        videos: {
            8214: 'spn_dmGAEs0', // Summon Aerie
            8229: 'GpNN2Q4a1qY', // Arcane Comet
            8230: 'uJ5DQhy-axc', // Phase Rush
        },
    },
    {
        slug: 'inspiration',
        id: 8300,
        construct: assetPath('/img/runeBuilder/assets/construct/8300'),
        landing: {
            glow: assetPath('/img/runeBuilder/assets/Inspiration/glow-i.png'),
            icon: assetPath('/img/runeBuilder/assets/Inspiration/icon-i.png'),
            vfx: assetPath('/img/runeBuilder/assets/Inspiration/vfx-i.png'),
        },
        icon: assetPath('/img/runeBuilder/runes/inspiration/icon-i-36x36.png'),
        colors: {
            title: '#49aab9',
            gradient: {
                top: '#49aab9',
                bottom: '#48b4be',
            },
        },
        videos: {
            8326: 'FkYLrlYVxDg', // Unsealed Spellbook (previously Summoner Specialist)
            8351: 'KSaOUuW-t6Q', // Glacial Augment
            8359: false,
        },
    },
];
