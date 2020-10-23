import * as actionTypes from './constants'
import {
  getAlbumDetail,
  getHotMusicDetail,
  getLyric,
  getSongDetail
} from '@/services/player'
import { 
  getRandomNumber,
 } from '@/utils/math-utils'
import { ParseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeLyric = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentIndexAndSong =(tag)=>{
  return (dispatch,getState)=>{
    const sequence = getState().getIn(["player","sequence"]);
    const playList = getState().getIn(["player","playList"]);
    let   currentSongIndex = getState().getIn(["player","currentSongIndex"]);
    switch (sequence) {
      case 1: //随机
          let randomIndex = getRandomNumber(playList.length);
          if (randomIndex !== 0) {
            while (randomIndex === currentSongIndex) {
              randomIndex = getRandomNumber(playList.length);
            }
          }
          currentSongIndex = randomIndex;
        break;
      default://顺序播放(循环,单曲循环)
          currentSongIndex += tag;
          if (currentSongIndex >= playList.length) currentSongIndex = 0;
          if (currentSongIndex < 0) currentSongIndex = playList.length - 1;      
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    //歌词请求
    dispatch(getLyricAction(currentSong.id));
  }
}

export const changeSequenceAction = (sequence)=>({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    const playList = getState().getIn(["player","playList"]);
    const songIndex = playList.findIndex(item => item.id === ids);

    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      //请求歌词;
      dispatch(getLyricAction(song.id));
    }else{
      getSongDetail(ids)
        .then(res => {
          const song = res.songs && res.songs[0];
          if (!song) return;
          const newPlayList = [...playList];
          newPlayList.push(song);
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length-1));
          dispatch(changeCurrentSongAction(song));
          //请求歌词
          dispatch(getLyricAction(song.id));
        })
    }
  }
    
}

export const getAlbumDetailAction=(ids)=>{
  return async (dispatch,getState) => {
    const playList = getState().getIn(["player","playList"]);
    const res =await getAlbumDetail(ids);
    const id= res.songs && res.songs[0].id;
    const songIndex = playList.findIndex( item => item.id === id);
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      //请求歌词
      dispatch(getLyricAction(song.id));
    }else{
      getAlbumDetail(ids)
        .then(res => {
          const  song  = [...res.songs];
          if (!song) return;
          const newPlayList = [];
          newPlayList.push(...song);
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(0));
          dispatch(changeCurrentSongAction(song[0]));
          //请求歌词
          dispatch(getLyricAction(song[0].id));
        })
    }
  }
}

export const getHotMusicDetailAction= (ids)=>{
  return async (dispatch,getState) => {
    const playList = getState().getIn(["player","playList"]);
    const res =await getHotMusicDetail(ids);
    const id= res.playlist && res.playlist.tracks[0].id;
    const songIndex = playList.findIndex( item => item.id === id);
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      //请求歌词
      dispatch(getLyricAction(song.id));
    }else{
      getHotMusicDetail(ids)
        .then(res => {
          const song = res.playlist && res.playlist.tracks;
          if (!song) return;
          const newPlayList = [];
          newPlayList.push(...song);
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(0));
          dispatch(changeCurrentSongAction(song[0]));
          //请求歌词
          dispatch(getLyricAction(song[0].id));
        })
    }
  }
}

export const getCurrentSongIndexAction = (index) =>{
  return dispatch=>{
       dispatch(changeCurrentSongIndexAction(index));
  }
}

export const getPlayListAction = (newPlayList) =>{
  return dispatch=>{
    dispatch(changePlayListAction(newPlayList));
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id)
      .then(res => {
        const lyric =res.lrc &&  res.lrc.lyric;
        const lyricList = ParseLyric(lyric);
        dispatch(changeLyric(lyricList));
      })
  }
}

export const changeLyricIndex = (lyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  lyricIndex
})