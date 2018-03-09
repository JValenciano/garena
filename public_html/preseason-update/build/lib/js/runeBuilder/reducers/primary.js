import findIndex from 'lodash/findIndex';


import store from 'runeBuilder/store';
import {
    pushToDataLayer,
} from 'helpers';

const initialState = false;


export default function primaryReducer(state = initialState, { type, data }) {
    switch (type) {
        case 'SET_PRIMARY':
        {
            const {
                paths,
            } = store.getState();

            const {
                path,
            } = data;

            const primary = paths.find(p => p.slug === path);

            const firstRuneIndex = typeof data.firstRuneIndex === 'number' ? data.firstRuneIndex : -1;
            const openIndex = firstRuneIndex === -1 ? 0 : 1;

            // Analytics Event
            pushToDataLayer({
                eventAction: 'RuneBuilder-PrimaryPath',
                eventLabel: primary.slug,
            });

            return {
                ...primary,
                slots: primary.slots.map((runes, runesIndex) => ({
                    runes: runes.runes,
                    choice: runesIndex === 0 ? firstRuneIndex : -1,
                    isOpen: runesIndex === openIndex,
                })),
            };
        }
        case 'ADD_PATHS':
        {
            const {
                paths,
                config,
            } = data;

            if (config === undefined || config.length !== 8) {
                return state;
            }

            const path = paths[config[0]];

            const primary = paths.find(p => p.slug === path.slug);

            return {
                ...primary,
                slots: primary.slots.map((runes, runesIndex) => ({
                    runes: runes.runes,
                    choice: config[runesIndex + 1],
                    isOpen: false,
                })),
            };
        }
        case 'SET_PRIMARY_RUNE':
        {
            const {
                slotIndex,
                runeIndex,
            } = data;

            const slot = {
                ...state.slots[slotIndex],
                choice: runeIndex,
                isOpen: false,
            };

            let newState = {
                ...state,
                slots: [
                    ...state.slots.slice(0, slotIndex),
                    slot,
                    ...state.slots.slice(slotIndex + 1),
                ],
            };

            const nextSlotIndex = findIndex(newState.slots, s => s.choice === -1);

            if (nextSlotIndex !== -1) {
                newState = {
                    ...newState,
                    slots: [
                        ...newState.slots.slice(0, nextSlotIndex),
                        {
                            ...newState.slots[nextSlotIndex],
                            isOpen: true,
                        },
                        ...newState.slots.slice(nextSlotIndex + 1),
                    ],
                };
            }

            return newState;
        }
        case 'TOGGLE_PRIMARY_RUNE_DRAWER':
        {
            const {
                slotIndex,
                isOpen,
            } = data;

            const slot = {
                ...state.slots[slotIndex],
                isOpen: typeof isOpen === 'boolean' ? isOpen : !state.slots[slotIndex].isOpen,
            };

            return {
                ...state,
                slots: [
                    ...state.slots.slice(0, slotIndex),
                    slot,
                    ...state.slots.slice(slotIndex + 1),
                ],
            };
        }
        case 'CLEAR_PRIMARY':
            return false;
        default:
            return state;
    }
}
