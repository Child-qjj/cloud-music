import request from './request'


export const getTopBanner=()=>{
    return request({
        url :'/banner?type=2'
    })
}

export const getHotRecommend=()=>{
    return request({
        url :'/personalized?limit=8'
    })
}

export const getNewAlbum=()=>{
    return request({
        url :'/top/album?limit=10'
    })
}

export const getTopList=(id)=>{
    return request({
        url :`/playlist/detail?id=${id}`
    })
}

export const getSettleSinger=()=>{
    return request({
        url: '/dj/toplist/popular'
    })
}


/* 

name": "云音乐飙升榜",
"id": 19723756,

"name": "云音乐新歌榜",
"id": 3779629,


name": "网易原创歌曲榜",
"id": 2884035,
*/