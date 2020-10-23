import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



import { actions } from '@/pages/player/store'
import { AlbumCoverWrapper } from './style';

export default memo(function QJAlbumCover(props) {

  const { data ,size=100 , bgp= -570 } = props ;
  
  const dispatch = useDispatch()

  const playMusic = (item)=>{
    dispatch(actions.getAlbumDetailAction(item.id));
  }
  return (
    
    <AlbumCoverWrapper className="al-cover sprite_02" size={size} bgp={bgp}>
      <div className="bg-cover">
        <img src={ data.picUrl + `?param=${size}y${size}` } alt=""/>
        <NavLink to={`/album?id=${data.id}`} className="mask sprite_cover" title={data.name}></NavLink>
        <div title="播放" className="play icon sprite_icon" onClick={e=>playMusic(data)}></div>
      </div>
      <p className="description f-thide">
        <NavLink to={`/album?id=${data.id}`} className="tit" title={data.name}>{data.name}</NavLink>
      </p>
      <p className="artist f-thide">
        <span className="artist">
          <NavLink className="s-fc3" to={`/artist?id=${data.artist && data.artist.id}`} title={data.artist && data.artist.name}>{data.artist && data.artist.name}</NavLink>
        </span>
      </p>
    </AlbumCoverWrapper>
  )
})
