import { 
    getMusicInfo,
    getLyric,
    getMusicUrl
} from '@/services/song';

import {
    lyricSplitter,
    musicUrlFormat
} from '@/utils/data-format.js';
import * as actionType from './constant';

export const changeCurrentMusicInfoAction = (music) =>({
    type:actionType.CHANGE_CURRENT_MUSIC_INFO,
    currentMusicInfo:music
});

export const changeCurrentMusicIndexAction = (currentMusicIndex) =>({
    type:actionType.CHANGE_CURRENT_MUSIC_INDEX,
    currentMusicIndex
});

const changeBarPlaylistAction = (barPlaylist) =>({
    type:actionType.CHANGE_BAR_PLAYLIST,
    barPlaylist
});

const changeCurrentLyricAction = (currentLyric) => ({
    type:actionType.CHANGE_CURRENT_LYRIC,
    currentLyric
})

export const getCurrentMusicInfoAction = (ids) => {
    return (dispatch,getState) =>{
        const playlist = getState().getIn(["playerBar", "barPlaylist"]);
        const musicIndex = playlist.findIndex( music => music.id === ids);
        if(musicIndex===-1){
            getMusicInfo(ids).then(res=>{
                const newMusic = res.songs && res.songs[0];
                if(!newMusic) return;
                const newPlaylist = [...playlist];
                newPlaylist.push(newMusic);
                dispatch(changeBarPlaylistAction(newPlaylist));
                dispatch(changeCurrentMusicIndexAction(newPlaylist.length-1));
                dispatch(changeCurrentMusicInfoAction(newMusic));
            });
            dispatch(getLyricAction(ids));
            dispatch(getMusicUrlAction(ids));

        }else{
            dispatch(changeCurrentMusicIndexAction(musicIndex));
            dispatch(changeCurrentMusicInfoAction(playlist[musicIndex]));
            dispatch(getLyricAction(ids));
            dispatch(getMusicUrlAction(ids));
        }
    }
}

export const changeRepeatModeAction = (repeatMode) => ({
    type:actionType.CHANGE_REPEAT_MODE,
    repeatMode
});

export const changeCurrentLrcIndexAction = (currentLrcIndex) => ({
    type:actionType.CHANGE_CURRENT_LRC_INDEX,
    currentLrcIndex
});

export const getLyricAction = (ids) => {
    return dispatch => {
        getLyric(ids).then(res=>{
            const lyrics = lyricSplitter(res.lrc.lyric);
            dispatch(changeCurrentLyricAction(lyrics));
        })
    }   
};

const changeMusicUrlAction = (currentUrl) => ({
    type:actionType.CHANGE_CURRENT_URL,
    currentUrl
})

export const getMusicUrlAction = (id) => {
    return dispatch => {
        getMusicUrl(id).then(res=>{
            const url = (res.data && res.data[0].url) || musicUrlFormat(id) || "";
            dispatch(changeMusicUrlAction(url));
        })
    }
}



   
