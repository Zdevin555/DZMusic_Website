import {
    getHitBanners,
    getBigHits,
    getHitAlbums
} from '@/services/hit';

import {
    getRankingLists,
    getSpecificRanking
} from '@/services/ranking';

import * as actionType from './constant';

const changeHitBannersAction = (res) => ({
    type:actionType.CHANGE_HIT_BANNERS,
    hitBanners:res.banners
});


export const getHitBannersAction = () => {
    
    return dispatch => {
        getHitBanners().then(res=>{
            dispatch(changeHitBannersAction(res))
        })
    }
}


const changeBigHitsAction = (res) => ({
    type:actionType.CHANGE_BIG_HITS,
    bigHits:res.result
});

export const getBigHitsAction = (limit) => {
    return dispatch => {
        getBigHits(limit).then(res=>{
            dispatch(changeBigHitsAction(res))
        })
    }
};

const changeHitAlbumsAction = (res) => ({
    type:actionType.CHANGE_HIT_ALBUMS,
    hitAlbums:res.albums
});

export const getHitAlbumsAction = (limit,type) => {
    return dispatch => {
        getHitAlbums(limit,type).then(res=>{
            dispatch(changeHitAlbumsAction(res))
        })
    }
}


const changeUpsurgeRankingAction = (res) =>({
    type:actionType.CHANGE_HIT_UPSURGE_RANKING,
    hitUpsurgeRanking:res.playlist
});

const changeFreshRankingAction = (res) =>({
    type:actionType.CHANGE_HIT_FRESH_RANKING,
    hitFreshRanking:res.playlist
});

const changeOriginalRankingAction = (res) =>({
    type:actionType.CHANGE_HIT_ORIGINAL_RANKING,
    hitOriginalRanking:res.playlist
});

const getSpecificRankingAction = (obj) => {
    const {id,index} = obj;
    return dispatch => {
        getSpecificRanking(id).then(res=>{
            switch(index){
                case 12:
                    dispatch(changeUpsurgeRankingAction(res));
                    break;
                case 16:
                    dispatch(changeFreshRankingAction(res));
                    break;
                case 17:
                    dispatch(changeOriginalRankingAction(res));
                    break;
                default:
            }
        });
    }
}

export const getHitRankingsAction = (index) =>{
    return dispatch =>{
        getRankingLists().then(res=>{
            dispatch(getSpecificRankingAction({
                id:res.list[index].id,
                index:index
            }));
        })
    }
}

