import request from './request'


export const getSongDetail=(ids)=>{
    return request({
        url :`/song/detail?ids=${ids}`
    })
}
export const getAlbumDetail=(ids)=>{
    return request({
        url :`/album?id=${ids}`
    })
}
export const getHotMusicDetail=(ids)=>{
    return request({
        url :`playlist/detail?id=${ids}`
    })
}

export const getLyric=(id)=>{
    return request({
        url :`/lyric?id=${id}`
    })
}
//ids = 1404885266 歌曲: 下山