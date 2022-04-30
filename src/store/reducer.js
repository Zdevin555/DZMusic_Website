import {combineReducers} from 'redux-immutable';
//
import {reducer as recommendationReducer} from '../views/discovery/pages/recommendation/store/index';

const reducers = combineReducers({
    recommendation:recommendationReducer,
});

export default reducers;