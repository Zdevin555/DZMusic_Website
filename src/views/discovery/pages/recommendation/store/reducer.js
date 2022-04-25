import * as actionType from './constant';

const initialState = {
    topBanners:[]
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionType.CHANGE_TOP_BANNERS:
            return {...state, topBanners:action.topBanners}
        default:
            return state;
    }
}

export default reducer;