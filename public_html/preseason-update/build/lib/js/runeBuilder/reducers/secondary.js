import findIndex from 'lodash/findIndex';

import store from 'runeBuilder/store';
import {
    pushToDataLayer,
} from 'helpers';


const initialState = false;


export default function secondaryReducer(state = initialState, { type, data }) {
    switch (type) {
        case 'SET_PRIMARY':
            return {
                isOpen: false,
                hasPath: false,
                slots: false,
            };
        case 'SET_SECONDARY':
        {
            const {
                paths,
            } = store.getState();

            const secondary = paths.find(path => path.slug === data.path);

            // Analytics Event
            pushToDataLayer({
                eventAction: 'RuneBuilder-SecondaryPath',
                eventLabel: secondary.slug,
            });

            return {
                ...secondary,
                isOpen: false,
                hasPath: true,
                slots: {
                    runes: [
                        ...secondary.slots[1].runes,
                        ...secondary.slots[2].runes,
                        ...secondary.slots[3].runes,
                    ],
                    slotIndex: 0,
                    choices: [-1, -1],
                    isOpen: true,
                },
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

            // We need to remove the primary path
            const remainingPaths = [
                ...paths.slice(0, config[0]),
                ...paths.slice(config[0] + 1),
            ];

            const secondary = remainingPaths[config[5]];

            return {
                ...secondary,
                isOpen: false,
                hasPath: true,
                slots: {
                    runes: [
                        ...secondary.slots[1].runes,
                        ...secondary.slots[2].runes,
                        ...secondary.slots[3].runes,
                    ],
                    slotIndex: 0,
                    choices: [config[6], config[7]],
                    isOpen: false,
                },
            };
        }
        case 'TOGGLE_SECONDARY_PATH_DRAWER':
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case 'SET_SECONDARY_RUNE':
        {
            const {
                slotIndex,
            } = state.slots;

            const choices = state.slots.choices;
            const runeGroup = Math.floor(data.runeIndex / 3);
            const groupMatch = findIndex(choices, choice => Math.floor(choice / 3) === runeGroup);

            // we need to check to see if the the rune group matches a group
            // of another choice slot.
            const choiceIndex = groupMatch === -1 ? slotIndex : groupMatch;
            choices[choiceIndex] = data.runeIndex;

            let nextSlot = -1;

            if (choices[0] === -1) {
                nextSlot = 0;
            } else if (choices[1] === -1) {
                nextSlot = 1;
            }

            return {
                ...state,
                slots: {
                    ...state.slots,
                    choices,
                    slotIndex: nextSlot,
                    isOpen: nextSlot !== -1,
                },
            };
        }
        case 'TOGGLE_SECONDARY_RUNE_DRAWER':
        {
            const {
                isOpen,
            } = state.slots;

            return {
                ...state,
                slots: {
                    ...state.slots,
                    slotIndex: data.slotIndex,
                    isOpen: !isOpen,
                },
            };
        }
        case 'CLEAR_PRIMARY':
        case 'CLEAR_SECONDARY':
            return false;
        default:
            return state;
    }
}
