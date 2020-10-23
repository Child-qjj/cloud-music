import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { 
  TopRankingWrapper
 } from './style'
import { 
  actions
 } from '@/pages/player/store'



export default memo(function QJTopRanking(props) {

  const dispatch = useDispatch();

  const {info,size=100} = props;
  const { tracks=[] } = info;
  const playMusic = (item)=>{
    dispatch(actions.getSongDetailAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="img">
          <img src={getSizeImage(info.coverImgUrl,size)} alt=""/>
          <NavLink to={`/discover/toplist?id=${info.id}`} className="mask sprite_cover" title={info.name}></NavLink>
        </div>
        <div className="tit">
            <NavLink to={`/discover/toplist?id=${info.id}`} title={info.name}>
              <h3 className="f-thide">{info.name}</h3>
            </NavLink>
            <div className="btn-bg">
              <div className="btn play sprite_02" title="播放" onClick={e=>playMusic(info)}>播放</div>
              <div className="btn favor sprite_02" title="收藏">收藏</div>
            </div>
          </div>
      </div>
      <div className="list">
        {
          tracks.slice(0,10).map((item,index)=>{
            return(
              <div key={item.id} className="list-item">
                <div className="rank">{index+1}</div>
                <div className="info">
                  <NavLink className="name f-thide text-nowrap" to={`/song?id=${item.id}`} title={item.name}>{item.name}</NavLink>
                  <div className="operate">
                    <div className="btn sprite_02 play" title="播放" onClick={e=>playMusic(item)}></div>
                    <div className="btn sprite_icon2 addto" title="添加到播放列表"></div>
                    <div className="btn sprite_02 favor" title="收藏"></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <NavLink to={`/discover/toplist?id=${info.id}`} className="s-fc0">查看全部&gt;</NavLink>
      </div>
    </TopRankingWrapper>
  )
})
