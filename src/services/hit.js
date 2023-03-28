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

export const getHitAlbums = (limit) => {
    return request({
        url:"/album/newest",
        params:{
            limit
        }
    })
}; 

