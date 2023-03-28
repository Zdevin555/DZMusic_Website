import request from './request';

export const getRankingLists = () => {
    return request({
        url:"/toplist"
    })
}; 

export const getSpecificRanking = (id) => {
    return request({
        url:"/playlist/detail",
        params:{
            id:id,     
        }
    })
}; 