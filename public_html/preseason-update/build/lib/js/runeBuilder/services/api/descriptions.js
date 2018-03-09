import store from 'runeBuilder/store';


/**
 * Set the shift button as active/inactive so react can render different content.
 * @param {boolean} shift The value to set.
 */
export function setShift(shift) {
    store.dispatch({
        type: 'SET_SHIFT_DESCRIPTIONS',
        data: {
            shift,
        },
    });
}

/**
 * Toggle a global forced value for the descriptions. This will override the shift value.
 */
export function toggleGlobal() {
    store.dispatch({
        type: 'TOGGLE_GLOBAL_DESCTIPTIONS',
        data: {},
    });
}
