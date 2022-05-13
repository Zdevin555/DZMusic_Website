import {Map} from 'immutable';
import * as actionType from './constant';

const initialState = Map({
    currentMusicInfo:{},
    barPlaylist:[],
    currentMusicIndex:0
});

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.CHANGE_CURRENT_MUSIC_INFO: 
            return state.set("currentMusicInfo",action.currentMusicInfo);
        case actionType.CHANGE_CURRENT_MUSIC_INDEX:
            return state.set("currentMusicIndex",action.currentMusicIndex);
        case actionType.CHANGE_BAR_PLAYLIST:
            return state.set("barPlaylist",action.barPlaylist);
        default: return state;
    } 
}

export default reducer;