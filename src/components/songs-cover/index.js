import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { 
  SongsCoverWrapper
 } from './style'
import { getCount } from '@/utils/format-utils'
import { actions } from '@/pages/player/store'

export default memo(function QJSongsCover(props) {

  const { item , mystyle } = props;
 
  const dispatch = useDispatch();

  const playMusic =(item)=>{
    dispatch(actions.getHotMusicDetailAction(item.id))
  }

  return (
    <SongsCoverWrapper>
        <div className="cover">
          <img src={item.picUrl+"?param=140y140"} alt=""/>
          <NavLink title={item.name} className="mask sprite_cover" to={`/playlist?id=${item.id}`}></NavLink>
          <div className="bottom sprite_cover">
            <div className="icon-play sprite_icon" title="播放" onClick={ e=>playMusic(item)}></div>
            <span className="icon-headset sprite_icon"></span>
            <span className="nb">{getCount(item.playCount)}</span>
          </div>
        </div>
          <p className="description">
            <NavLink title={item.name} className={"tit " + mystyle } to={`/playlist?id=${item.id}`}>{item.name}</NavLink>
          </p>
    </SongsCoverWrapper>                 
  )
})
