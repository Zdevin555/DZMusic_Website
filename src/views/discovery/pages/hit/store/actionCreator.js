import {
    getHitBanners,
    getBigHits,
    getHitAlbums
} from '@/services/hit';

import * as actionType from './constant';

const changeHitBannersAction = (res) => ({
    type:actionType.CHANGE_HIT_BANNERS,
    hitBanners:res.banners
});

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

