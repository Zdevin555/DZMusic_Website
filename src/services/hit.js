import request from './request';

export const getHitBanners = () => {
    return request({
        url:"/banner"
    })
} ;

export const getBigHits = (limit) => {
    return request({
        url:"/personalized",
        params:{
            limit
        }
    })
}; 

export const getHitAlbums = (limit,type) => {
    return request({
        url:"/top/album",
        params:{
            limit,
            type
        }
    })
}; 

