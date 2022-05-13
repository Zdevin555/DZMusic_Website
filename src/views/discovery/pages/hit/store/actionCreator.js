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

//hit-banner
export const getHitBannersAction = () => {
    //最终dispatch接收的thunk-action函数并不是getTopBannerAction指向
    //的函数，而是指向函数返回的函数（即返回值也是函数，dispatch是原生）
    //。为什么不直接传入getTopBannerAction代表的函数呢?原因是该函数本身
    //还可以接收参数
    return dispatch => {
        getHitBanners().then(res=>{
            dispatch(changeHitBannersAction(res))
        })
    }
}

//hit-song
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

//hit-album
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

//hit-ranking
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
                case 0:
                    dispatch(changeUpsurgeRankingAction(res));
                    break;
                case 1:
                    dispatch(changeFreshRankingAction(res));
                    break;
                case 2:
                    dispatch(changeOriginalRankingAction(res));
                    break;
                //default不写有警告，里面可以什么都不写
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

