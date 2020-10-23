import React from 'react'

const  QJAlbum = React.lazy(_ =>import('./album')); 
const  QJArtist =  React.lazy(_ =>import('./artist'));
const  QJDjradio = React.lazy(_ =>import('./djradio'));
const  QJRecommend = React.lazy(_ =>import('./recommend'));
const  QJSongs = React.lazy(_ =>import('./songs'));
const  QJToplist = React.lazy(_ =>import('./toplist'));


export {
    QJAlbum,
    QJArtist,
    QJDjradio,
    QJRecommend,
    QJSongs,
    QJToplist
}