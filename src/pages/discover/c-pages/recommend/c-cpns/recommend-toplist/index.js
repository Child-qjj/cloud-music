import React, { memo, useEffect } from 'react'

import { 
    TopListWrapper
 } from './style'
 import QJTopRanking from '@/components/top-ranking'
import QJThemeHeaderR from '@/components/theme-header-rem'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators';

function QJTopListR() {
//

//
    const dispatch = useDispatch();
    const { upRanking,newRanking,originRanking, } = useSelector(state => ({
        upRanking:state.getIn(["recommend","upRanking"]),
        newRanking:state.getIn(["recommend","newRanking"]),
        originRanking:state.getIn(["recommend","originRanking"])
    }),shallowEqual)
//
    useEffect(() => {
        dispatch(getTopListAction(19723756));
        dispatch(getTopListAction(3779629));
        dispatch(getTopListAction(2884035));/*  name": "云音乐飙升榜", "id": 19723756,  "name": "云音乐新歌榜",  "id": 3779629, "id": 2884035, */
    }, [dispatch])


    return (
        <TopListWrapper>
            <QJThemeHeaderR title="榜单" url="/discover/toplist/"/>
            <div className="tops">
                <QJTopRanking info={upRanking}/>
                <QJTopRanking info={newRanking}/>
                <QJTopRanking info={originRanking}/>
            </div>
        </TopListWrapper>
    )
}




export default memo(QJTopListR);