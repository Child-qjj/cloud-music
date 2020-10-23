import * as actionTypes from './constants'

import { 
    getTopBanner,
    getHotRecommend,
    getNewAlbum,
    getTopList
 } from '@/services/recommend'

//变量与reducer的action.topBanners一致
const changeTopBannersAction = (res) =>({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) =>({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})
const changeNewAlbumAction = (res) =>({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.monthData
})



const changeUpRankingAction = (res) =>({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})
const changeNewRankingAction = (res) =>({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})
const changeOriginRankingAction = (res) =>({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})





export const getTopBannerAction = ()=>{
    return dispatch =>{
        getTopBanner()
            .then(res =>{
                dispatch(changeTopBannersAction(res));
            })
    }
}

export const getHotRecommendAction = ()=>{
    return dispatch =>{
        getHotRecommend()
            .then(res =>{
                dispatch(changeHotRecommendAction(res));
            })
    }
}

export const getNewAlbumAction = ()=>{
    return dispatch =>{
        getNewAlbum()
            .then(res =>{
                dispatch(changeNewAlbumAction(res));
            })
    }
}
export const getTopListAction =(id)=>{
    return dispatch =>{
        getTopList(id)
            .then(res=>{
                switch (id) {
                    case 19723756:
                        dispatch(changeUpRankingAction(res));
                        break;
                    case 3779629:
                        dispatch(changeNewRankingAction(res));
                        break;
                    case 2884035:
                        dispatch(changeOriginRankingAction(res));
                        break;
                    default:
                }
            });
    }

}