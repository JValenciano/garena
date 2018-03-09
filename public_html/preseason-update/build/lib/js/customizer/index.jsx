import React from 'react';
import {
    render,
} from 'react-dom';
import axios from 'axios';


import {
    assetPath,
} from 'helpers';

import paths from 'data/paths';
import App from './components/App';


// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable */
    require('preact/devtools');
    /* eslint-enable */
}

const mountNode = document.querySelector('#customizer-app');


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

            render(
                <App paths={data} />,
                mountNode
            );
        });
}
