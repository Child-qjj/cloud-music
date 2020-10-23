import React, { memo } from 'react'


import { 
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'
export default memo(function QJPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>PlayerLeft</PlayerLeft>
        <PlayerRight>PlayerRight</PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
