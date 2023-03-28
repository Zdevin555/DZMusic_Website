import {Map} from 'immutable';
import * as actionType from './constant';
import {REPEAT_MODE} from '@/common/local-data';

const initialState = Map({
    currentMusicInfo:{},
    barPlaylist:[],
    currentMusicIndex:0,
    repeatMode:REPEAT_MODE.REPEAT_ALL,
    currentLyric:[],
    currentLrcIndex:0,
    currentUrl:""
});

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionType.CHANGE_CURRENT_MUSIC_INFO: 
            return state.set("currentMusicInfo",action.currentMusicInfo);
        case actionType.CHANGE_CURRENT_MUSIC_INDEX:
            return state.set("currentMusicIndex",action.currentMusicIndex);
        case actionType.CHANGE_BAR_PLAYLIST:
            return state.set("barPlaylist",action.barPlaylist);
        case actionType.CHANGE_REPEAT_MODE:
            return state.set("repeatMode",action.repeatMode);
        case actionType.CHANGE_CURRENT_LYRIC:
            return state.set("currentLyric",action.currentLyric);
        case actionType.CHANGE_CURRENT_LRC_INDEX:
            return state.set("currentLrcIndex",action.currentLrcIndex);
        case actionType.CHANGE_CURRENT_URL:
            return state.set("currentUrl",action.currentUrl);
        default: return state;
    } 
}

export default reducer;