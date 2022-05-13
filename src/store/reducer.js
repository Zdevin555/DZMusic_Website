import {combineReducers} from 'redux-immutable';
//
import {reducer as hitReducer} from '../views/discovery/pages/hit/store/index';
import {reducer as playerBarReducer} from '../components/player-bar/store';

const reducers = combineReducers({
    hit:hitReducer,
    playerBar:playerBarReducer
});

export default reducers;