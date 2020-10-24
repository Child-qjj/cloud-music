import React, { memo , useEffect , useRef } from 'react'
import { NavLink } from 'react-router-dom'


import { 
  PlayListWrapper,
  WrapperHeader,
  ContentRight,
  Contentleft
 } from './style'
import { 
  getPlayListBackground,
  formatMinuteSecond  
 } from '@/utils/format-utils'


export default memo(function QJPlayList(props) {

  const { playlist=[] , currentSong={} , setVisiable ,lyricList=[] , lyricIndex = 0 ,currentSongIndex = 0} = props;

  const lyricRef = useRef();
  const songRef = useRef();
  
  const closeList = () => {
    setVisiable(false);
  } 
  useEffect(() => {
    const ulHeight = songRef.current.childNodes && songRef.current.childNodes[0];
    const cNodeHeight = ulHeight.childNodes && ulHeight.childNodes[0].clientHeight ;
    const songHeight = songRef.current.clientHeight;
    const tempHeight = Math.floor(songHeight/cNodeHeight);

    console.log(tempHeight);
    // lyricRef.current.scrollTop += 32;
    if (tempHeight<=currentSongIndex) {
      songRef.current.scrollTop = cNodeHeight*(currentSongIndex);
    }else{
      songRef.current.scrollTop = 0;
    }
  }, [currentSongIndex])

  useEffect(() => {
    const cNodeHeight = lyricRef.current.childNodes[0] && lyricRef.current.childNodes[0].clientHeight;
    const lyricHeight = lyricRef.current.clientHeight;
    const tempHeight = Math.floor(lyricHeight/cNodeHeight);
    // lyricRef.current.scrollTop += 32;
    if (tempHeight<=lyricIndex) {
      lyricRef.current.scrollTop = cNodeHeight*(lyricIndex-tempHeight/2);
    }else{
      lyricRef.current.scrollTop = 0;
    }
  }, [lyricIndex])

  return (
    <PlayListWrapper>
      <WrapperHeader className="listhd playlist_bg">
        <div className="listhdc">
          <h4>{`播放列表(${playlist.length})`}</h4>
          <div className="btn favor_all">
            <span className="play_list icon"></span>
            收藏全部
          </div>
          <span className="line"></span>
          <div className="btn clear">
            <span className="play_list icon_del"></span>
            清除
          </div>
          <p className="song_name">{currentSong.name}</p>
          <span className="play_list close" onClick={e => closeList() }></span>
        </div>
      </WrapperHeader>
      <div className="play-list playlist_bg">
        <img src={getPlayListBackground(currentSong.al && currentSong.al.pic_str)} alt="" className="img_bg"/>
        <div className="mask"></div>
        <Contentleft className="songs-list" ref={songRef}>
          <ul>
              {
                playlist.map((song,index)=>{
                  return(
                    <li className={"list-items "+( currentSong === playlist[index] ?"play":"")} key={song.id}>
                      <div className="col col-1">
                        <div className="playicn play_list"></div>
                      </div>
                      <div className="col col-2">{song.name}</div>
                      <div className="col col-3">
                        <div className="icns">
                          <i className="ico ico-del play_list" title="删除">删除</i>
                          <i className="ico ico-dl play_list" title="下载">下载</i>
                          <i className="ico ico-share play_list" title="分享" >分享</i>
                          <i className="ico ico-add play_list" title="收藏" >收藏</i>
                        </div>
                      </div>
                      <div className="col col-4">
                        <span title={song.ar && song.ar[0].name}>
                          <NavLink to={`/artist?id=${song.ar && song.ar[0].id}`}>
                            {song.ar && song.ar[0].name}
                          </NavLink>
                        </span>
                      </div>
                      <div className="col col-5">{formatMinuteSecond(song.dt)}</div>
                      <div className="col col-6">
                        <NavLink to={`/discover/player?id=1`} className="play_list ico-src">来源</NavLink>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
        </Contentleft>
        <div className="mask2"></div>
        <ContentRight className="lyric-list" ref={lyricRef}>
          {
            lyricList.map((item,index) => {
              return (
                <p key={ item.id } className={ index === lyricIndex?"active":""}>{item.content}</p>
              )
            })
          }
        </ContentRight>
      </div>
    </PlayListWrapper>
  )
})
