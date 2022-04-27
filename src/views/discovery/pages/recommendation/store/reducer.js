import { Map } from 'immutable';
import * as actionType from './constant';

const initialState = Map({
    topBanners:[]
});

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionType.CHANGE_TOP_BANNERS:
            return state.set("topBanners",action.topBanners);
        default:
            return state;
    }
}

export default reducer;