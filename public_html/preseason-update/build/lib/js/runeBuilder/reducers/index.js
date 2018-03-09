import {
    combineReducers,
} from 'redux';


import paths from './paths';
import primary from './primary';
import secondary from './secondary';
import longDescriptions from './longDescriptions';


export default combineReducers({
    paths,
    primary,
    secondary,
    longDescriptions,
});
