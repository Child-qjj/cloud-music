import React, { memo } from 'react'



import { 
  HotAnchorWrapper
 } from './style'
export default memo(function QJHotAnchor() {
  return (
    <HotAnchorWrapper className="hot-anchor"> 
      <h3 className="tit">
        热门主播
      </h3>
      <ul className="n-hotdj f-cb" id="hotdj-list">
        <li>
          <a href="https://music.163.com/user/home?id=278438485" className="cver"><img className="j-img" src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="" /></a>
          <div className="info">
          <p>
            <a href="https://music.163.com/user/home?id=278438485" className="nm-icn f-thide s-fc0">陈立</a> 
            <sup className="u-icn u-icn-1 sprite_icon2"></sup>
          </p>
          <p className="f-thide s-fc3">心理学家、美食家陈立教授</p>
          </div>
        </li>
        <li>
          <a href="https://music.163.com/user/home?id=91239965" className="cver"><img className="j-img" src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" alt="" /></a>
          <div className="info">
          <p><a href="https://music.163.com/user/home?id=91239965" className="nm-icn f-thide s-fc0">DJ艳秋</a> <sup className="u-icn u-icn-1 sprite_icon2"></sup>
          </p>
          <p className="f-thide s-fc3">著名音乐节目主持人</p>
          </div>
        </li>
        <li>
          <a href="https://music.163.com/user/home?id=324314596" className="cver"><img className="j-img" src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" alt="" /></a>
          <div className="info">
          <p><a href="https://music.163.com/user/home?id=324314596" className="nm-icn f-thide s-fc0">国家大剧院古典音乐频道</a> <sup className="u-icn u-icn-1 sprite_icon2"></sup>
          </p>
          <p className="f-thide s-fc3">国家大剧院古典音乐官方</p>
          </div>
        </li>
        <li>
          <a href="https://music.163.com/user/home?id=1611157" className="cver"><img className="j-img" src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40"  alt="" /></a>
          <div className="info">
          <p>
            <a href="https://music.163.com/user/home?id=1611157" className="nm-icn f-thide s-fc0">谢谢收听</a> 
            <sup className="u-icn u-icn-1 sprite_icon2"></sup>
          </p>
          <p className="f-thide s-fc3">南京电台主持人王馨</p>
          </div>
        </li>
        <li>
          <a href="https://music.163.com/user/home?id=2313954" className="cver"><img className="j-img" src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="" /></a>
          <div className="info">
          <p><a href="https://music.163.com/user/home?id=2313954" className="nm-icn f-thide s-fc0">DJ晓苏</a> <sup className="u-icn u-icn-1 sprite_icon2"></sup>
          </p>
          <p className="f-thide s-fc3">独立DJ，CRI环球旅游广播特邀DJ</p>
          </div>
        </li>
      </ul>
    </HotAnchorWrapper>
  )
})
