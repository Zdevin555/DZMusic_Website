import request from './request';

export const getMusicInfo = (ids) => {
    return request({
        url:"/song/detail",
        params:{
            ids
        }
    })
}

export const hasMusicUrl = (id) =>{
    return request({
        url:"/check/music",
        params:{
            id
        }
    })
}

// export const getMusicData = (id) => {
//     return request({
//         url:"/song/url",
//         params:{
//             id
//         }
//     })
// }
