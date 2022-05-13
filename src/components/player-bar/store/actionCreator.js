import { 
    getMusicInfo,
} from '@/services/song';
import * as actionType from './constant';

const changeCurrentMusicInfoAction = (res) =>({
    type:actionType.CHANGE_CURRENT_MUSIC_INFO,
    currentMusicInfo:res
});

const changeCurrentMusicIndexAction = (currentMusicIndex) =>({
    type:actionType.CHANGE_CURRENT_MUSIC_INDEX,
    currentMusicIndex
});

const changeBarPlaylistAction = (barPlaylist) =>({
    type:actionType.CHANGE_BAR_PLAYLIST,
    barPlaylist
});

export const getCurrentMusicInfoAction = (ids,playlist) => {
    const isExist = playlist.some((item)=>{
        return item.id === ids;
    })

    if(!isExist){
        return dispatch =>{
            getMusicInfo(ids).then(res=>{
                playlist.push(res.songs[0]);
                dispatch(changeBarPlaylistAction(playlist));
                dispatch(changeCurrentMusicIndexAction(playlist.length));
                dispatch(changeCurrentMusicInfoAction(res.songs[0]));
            })
        }
    }
}
