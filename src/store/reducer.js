import {combineReducers} from 'redux-immutable';
//
import {reducer as hitReducer} from '../views/discovery/pages/hit/store/index';

const reducers = combineReducers({
    hit:hitReducer,
});

export default reducers;