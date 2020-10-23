import React, { memo, useEffect } from 'react'
import { useDispatch , useSelector , shallowEqual } from 'react-redux'

import { keywords } from '@/common/local-data'


import { getHotRecommendAction } from '../../store/actionCreators';
import { 
    HotRecommendWrapper
 } from './style'
import QJThemeHeaderR from '@/components/theme-header-rem'
import QJSongsCover from '@/components/songs-cover'

function QJHotRecommend() {
// state
    //const [state, setstate] = useState(initialState)
//redux hooks
    const dispatch = useDispatch()
    const { hotRecommends } = useSelector(state => ({
        hotRecommends:state.getIn(["recommend","hotRecommends"])
    }),shallowEqual)
//other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction())
    }, [dispatch])

  
    return (
        <HotRecommendWrapper>
            <QJThemeHeaderR title="热门推荐" url="/discover/songs/" keywords={keywords}/>
            <ul className="hrlst">
              {
                hotRecommends.map(
                  (item,index)=>{
                    return(
                      <QJSongsCover item={item} key={item.name}/>
                    )
                  }
                )
              }
            </ul>
        </HotRecommendWrapper>
    )
}



export default memo(QJHotRecommend)
