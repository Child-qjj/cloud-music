import React, { memo } from 'react'


import { 
  UserLoginWrapper
 } from './style'

export default memo(function QJUserLogin() {
  return (
    <UserLoginWrapper className="user-profile">
      <div className="my-info sprite_02">
        <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <div className="btn sprite_02">用户登陆</div>
      </div>
    </UserLoginWrapper>
  )
})
 