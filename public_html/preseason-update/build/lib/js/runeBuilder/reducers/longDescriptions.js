const initialState = {
    shift: false,
    global: false,
};


export default function descriptionReducer(state = initialState, { type, data }) {
    switch (type) {
        case 'SET_SHIFT_DESCRIPTIONS':
            return {
                ...state,
                shift: data.shift,
            };
        case 'TOGGLE_GLOBAL_DESCTIPTIONS':
            return {
                ...state,
                global: !state.global,
            };
        default:
            return state;
    }
}
