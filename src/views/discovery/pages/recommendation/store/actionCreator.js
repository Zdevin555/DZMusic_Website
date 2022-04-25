import {getTopBanners} from '@/services/recommendation';

import * as actionType from './constant';

const changeTopBannerAction = (res) => ({
    type:actionType.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})

export const getTopBannerAction = () => {
    //最终dispatch接收的thunk-action函数并不是getTopBannerAction指向
    //的函数，而是指向函数返回的函数（即返回值也是函数，dispatch是原生）
    //。为什么不直接传入getTopBannerAction代表的函数呢?原因是该函数本身
    //还可以接收参数
    return dispatch => {
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}