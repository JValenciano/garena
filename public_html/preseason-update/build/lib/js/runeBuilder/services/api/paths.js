import store from 'runeBuilder/store';

/**
 * Dispatch event to set the primary path.
 * @param {string} path           slug of the path we're going to set as primary.
 * @param {number} firstRuneIndex If provided the index of the keystone we'll also set. (optional)
 */
export function setPrimary(path, firstRuneIndex) {
    console.log('setPrimary', path, firstRuneIndex);
    store.dispatch({
        type: 'SET_PRIMARY',
        data: {
            path,
            firstRuneIndex,
        },
    });
}

/**
 * [setSecondary description]
 * @param {string} path slug of the path we're going to set as secondary.
 */
export function setSecondary(path) {
    store.dispatch({
        type: 'SET_SECONDARY',
        data: {
            path,
        },
    });
}

/**
 * Set a rune in the primary path.
 * @param {number} slotIndex Index of the slot this rune is in.
 * @param {number} runeIndex Index of the rune to set
 */
export function setPrimaryRune(slotIndex, runeIndex) {
    store.dispatch({
        type: 'SET_PRIMARY_RUNE',
        data: {
            slotIndex,
            runeIndex,
        },
    });
}

/**
 * Toggle open/closed a rune slot's drawer in the primary path.
 * @param  {number} slotIndex Index of the slot to open.
 */
export function togglePrimaryRuneDrawer(slotIndex) {
    store.dispatch({
        type: 'TOGGLE_PRIMARY_RUNE_DRAWER',
        data: {
            slotIndex,
        },
    });
}
/**
 * Set a rune in the secondary path. We don't need to know the slot in this case.
 * The secondary rune will be set based on which slot it's in.
 * @param {number} runeIndex Index of the rune to set
 */
export function setSecondaryRune(runeIndex) {
    store.dispatch({
        type: 'SET_SECONDARY_RUNE',
        data: {
            runeIndex,
        },
    });
}

/**
 * Toggle the path selector drawer for the secondary path.
 */
export function toggleSecondaryPathDrawer() {
    store.dispatch({
        type: 'TOGGLE_SECONDARY_PATH_DRAWER',
        data: {},
    });
}

/**
 * Open the rune drawer for the secondary path and set one of the available slots as active.
 * @param  {number} slotIndex Index of the slot we want the secondary path to be  trakcing.
 */
export function toggleSecondaryRuneDrawer(slotIndex) {
    store.dispatch({
        type: 'TOGGLE_SECONDARY_RUNE_DRAWER',
        data: {
            slotIndex,
        },
    });
}


// Clear the primary path
export function clearPrimary() {
    store.dispatch({
        type: 'CLEAR_PRIMARY',
        data: {},
    });
}

// Clear the secondary path
export function clearSecondary() {
    store.dispatch({
        type: 'CLEAR_SECONDARY',
        data: {},
    });
}
