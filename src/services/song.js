import request from './request';

export const getMusicInfo = (ids) => {
    return request({
        url:"/song/detail",
        params:{
            ids:ids
        }
    })
};

export const getMusicUrl = (id) => {
    return request({
        url:"/song/url",
        params:{
            id:id
        }
    })
};

export const getLyric = (id) => {
    return request({
        url:"/lyric",
        params:{
            id
        }
    })
};

