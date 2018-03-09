import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {
    Provider,
} from 'react-redux';
import findIndex from 'lodash/findIndex';


import {
    assetPath,
} from 'helpers';


import store from './store';
import paths from '../data/paths';


import App from './components/App';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable */
    require('preact/devtools');
    /* eslint-enable */
}


const mountNode = document.querySelector('#app');


if (mountNode) {
    axios.get(assetPath(`/data/${window.language}/runes.json`))
        .then((response) => {
            let data = response.data.styles.map((path, pathIndex) => ({
                ...paths[pathIndex],
                ...path,
            }));

            data = [
                data[2],
                data[1],
                data[3],
                data[0],
                data[4],
            ];

            if (process.env.NODE_ENV !== 'production') {
                /**
                 * This is a safety. This will alert you that a rune in the data doesn't have a
                 * share page set up. These unfortunately have to be manual.
                 */
                const supportedShareRoutes = [
                    '8000-8003',
                    '8000-8008',
                    '8000-8021',
                    '8000-8101',
                    '8100-8112',
                    '8100-8124',
                    '8100-8128',
                    '8200-8214',
                    '8200-8229',
                    '8200-8230',
                    '8300-8326',
                    '8300-8351',
                    '8300-8352',
                    '8300-8353',
                    '8300-8356',
                    '8300-8359',
                    '8400-8436',
                    '8400-8437',
                    '8400-8439',
                ];

                data.forEach((path) => {
                    path.slots[0].runes.forEach((rune) => {
                        const testRoute = `${path.id}-${rune.runeId}`;
                        const test = findIndex(supportedShareRoutes, route => testRoute === route);
                        if (test === -1) {
                            console.log(testRoute, path.name, rune.name);
                        }
                    });
                });
            }

            render(
                <Provider store={store}>
                    <App data={data} />
                </Provider>,
                mountNode
            );
        });
}
