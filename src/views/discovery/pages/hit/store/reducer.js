import { Map } from 'immutable';
import * as actionType from './constant';

const initialState = Map({
    hitBanners:[],
    bigHits:[],
    hitAlbums:[],
    hitUpsurgeRanking:{},
    hitFreshRanking:{},
    hitOriginalRanking:{}
});

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionType.CHANGE_HIT_BANNERS:
            return state.set("hitBanners",action.hitBanners);
        case actionType.CHANGE_BIG_HITS:
            return state.set("bigHits",action.bigHits);
        case actionType.CHANGE_HIT_ALBUMS:
            return state.set("hitAlbums",action.hitAlbums);
        case actionType.CHANGE_HIT_UPSURGE_RANKING:
            return state.set("hitUpsurgeRanking",action.hitUpsurgeRanking);
        case actionType.CHANGE_HIT_FRESH_RANKING:
            return state.set("hitFreshRanking",action.hitFreshRanking);
        case actionType.CHANGE_HIT_ORIGINAL_RANKING:
            return state.set("hitOriginalRanking",action.hitOriginalRanking);
        default:
            return state;
    }
}

export default reducer;