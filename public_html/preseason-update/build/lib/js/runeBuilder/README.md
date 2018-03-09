# Rune Builder

A visual clone of the Dev17 rune builder. Built with `preact`, `preact-compat`, `styled-components`, and `redux`.

# Data

The app fetches a localized json file (`/dist/data/en/runes.json`) and combines it with static data found in `/lib/js/data/paths.js`.

* `runes.json` contains data specific to the runes and paths in it's translated form. Each language requires it's own version of this file.
* `paths.js` contains static data for each path (like colors and file locations) that are used in the app regardless of the language. This data also is specific to this project and can't be provided by the localized json files.

# Redux store

This app uses `redux` which should be interacted with through the paths api provided in `./services/api/paths.js`.

* `paths`: All the path's data. Pulled in as a `json` file based on the value of `window.language`. Should support any language so long as the schema matches the english one.
* `primary`: Data for the selected primary path.
* `secondary`: Data for the selected secondary path. Requires a different schema than `primary` because of the way a user selects secondary runes.
* `longDescriptions`: A global flag that lets users display long vs short descriptions.

# Desktop VS Mobile

This app has custom implementations for desktop and mobile. A `ViewportSwitch` component controls which version of the app gets mounted. Both versions share a redux store to avoid redundancy on data and logic.

# Google Analytics

Google analytics is implemented through out the app. It's accessed via `pushToDataLayer` in `/lib/js/helpers`. Events in the app are tracked in the `reducers`. This helps sync analytics across `Desktop` and `Mobile`.

##### Events we're currently tracking:
* Primary Path selection
* Secondary Path selection
* Completed builds with their configuration
* User sharing types

Note: The site is sharing scrolling events separately that will be used to track when the rune builder is in view.
