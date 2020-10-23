import React from 'react'
import { Redirect } from 'react-router-dom'

import QJDiscover from '@/pages/discover'
import {
    QJAlbum,
    QJArtist,
    QJDjradio,
    QJRecommend,
    QJSongs,
    QJToplist
} from '@/pages/discover/c-pages'

// import  QJAlbum from '../pages/discover/c-pages/album'
// import  QJArtist from '../pages/discover/c-pages/artist'
// import  QJDjradio from '../pages/discover/c-pages/djradio'
// import  QJRecommend from '../pages/discover/c-pages/recommend'
// import  QJSongs from '../pages/discover/c-pages/songs'
// import  QJToplist from '../pages/discover/c-pages/toplist'

const QJPlayer = React.lazy(_ => import('../pages/player'));
const HYFriend = React.lazy(_ => import('@/pages/friend'));
const HYMine = React.lazy(_ => import('@/pages/mine'));



const  routes = [
    {
        path:"/",
        exact:true,
        // component:HYDiscover 两种方法
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:QJDiscover, 
        routes:[
            {
                path:'/discover',
                exact:true,
                render:()=>(
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path:'/discover/recommend',
                component:QJRecommend
            },
            {
                path:'/discover/album',
                component:QJAlbum
            },
            {
                path:'/discover/artist',
                component:QJArtist
            },
            {
                path:'/discover/djradio',
                component:QJDjradio
            },
            {
                path:'/discover/songs',
                component:QJSongs
            },
            {
                path:'/discover/toplist',
                component:QJToplist
            },
            {
                path:"/discover/player",
                component:QJPlayer
            }
        ]
    },
    {
        path:"/mine",
        component:HYMine
    },
    {
        path:"/friend",
        component:HYFriend
    },   
]

export default routes