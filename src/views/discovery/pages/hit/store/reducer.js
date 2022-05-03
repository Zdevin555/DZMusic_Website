import { Map } from 'immutable';
import * as actionType from './constant';

const initialState = Map({
    hitBanners:[],
    bigHits:[],
    hitAlbums:[]
});

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionType.CHANGE_HIT_BANNERS:
            return state.set("hitBanners",action.hitBanners);
        case actionType.CHANGE_BIG_HITS:
            return state.set("bigHits",action.bigHits);
        case actionType.CHANGE_HIT_ALBUMS:
            return state.set("hitAlbums",action.hitAlbums);
        default:
            return state;
    }
}

export default reducer;