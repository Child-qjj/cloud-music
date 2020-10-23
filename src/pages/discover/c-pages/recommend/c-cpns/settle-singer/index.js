import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { 
  SettleSingerWrapper,
  SettleSingerList
 } from './style'

export default memo(function QJSettleSinger() {
  return (
    <SettleSingerWrapper className="settle-singer">
        <h3 className="tit">
          <span>入驻歌手</span>
          <NavLink to="/discover/artist/signed/">查看全部 &gt;</NavLink>
        </h3>
        <SettleSingerList className="n-enter f-cb" id="singer-list">
          <li>
            <a href="https://music.163.com/user/home?id=29879272" className="itm f-tdn">
              <div className="head"><img className="j-img" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
              <div className="ifo">
              <h4><span className="nm f-fs1 f-ib f-thide">张惠妹aMEI</span></h4>
              <p className="f-thide s-fc3">台湾歌手张惠妹</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://music.163.com/user/home?id=100167517" className="itm f-tdn">
              <div className="head"><img className="j-img" alt="" src="http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62" /></div>
              <div className="ifo">
              <h4><span className="nm f-fs1 f-ib f-thide">Fine乐团</span></h4>
              <p className="f-thide s-fc3">独立音乐人</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://music.163.com/user/home?id=58426904" className="itm f-tdn">
            <div className="head"><img className="j-img" alt="" src="http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62" /></div>
            <div className="ifo">
            <h4><span className="nm f-fs1 f-ib f-thide">萬曉利</span></h4>
            <p className="f-thide s-fc3">民谣歌手、中国现代民谣的代表人物之一</p>
            </div>
            </a>
          </li>
          <li>
            <a href="https://music.163.com/user/home?id=93504818" className="itm f-tdn">
            <div className="head"><img className="j-img" src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" alt="" /></div>
            <div className="ifo">
            <h4><span className="nm f-fs1 f-ib f-thide">音乐人赵雷</span></h4>
            <p className="f-thide s-fc3">民谣歌手</p>
            </div>
            </a>
          </li>
          <li>
            <a href="https://music.163.com/user/home?id=46998208" className="itm f-tdn">
              <div className="head"><img className="j-img" src="http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62" alt="" /></div>
              <div className="ifo">
              <h4><span className="nm f-fs1 f-ib f-thide">王三溥</span></h4>
              <p className="f-thide s-fc3">音乐人</p>
              </div>
            </a>
          </li>
        </SettleSingerList>
        <div>
          <a className="u-btn sprite_button" href="https://music.163.com/recruit" target="_blank" rel="noopener noreferrer">
            <i className="sprite_button">申请成为网易音乐人</i>
          </a>
        </div>
    </SettleSingerWrapper>
  )
})
