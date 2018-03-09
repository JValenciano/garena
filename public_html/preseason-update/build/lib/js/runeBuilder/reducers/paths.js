const initialState = [];


export default function pathsReducer(state = initialState, { type, data }) {
    switch (type) {
        case 'ADD_PATHS':
            return data.paths;
        default:
            return state;
    }
}
