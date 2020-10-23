import React, { memo , useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'


import { 
    NewAlbumWrapper,
    Content
 } from './style'
import QJThemeHeaderR from '@/components/theme-header-rem'
import QJAlbumCover from '@/components/album-cover'
import { getNewAlbumAction } from '../../store/actionCreators'
function QJNewAlbunR() {
// state
    const { newAlbums } = useSelector(state => ({
        newAlbums : state.getIn(["recommend","newAlbums"])
    }),shallowEqual);
//redux hooks
    const dispatch = useDispatch();
//other hooks
    useEffect(() => {
       dispatch(getNewAlbumAction());
    }, [dispatch]);

    const CarouselRef = useRef();

    const settings = {
      dots: false,
      infinite: true,
      speed: 1450,
      autoplay:false,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    return (
        <NewAlbumWrapper>
            <QJThemeHeaderR title="新碟上架" url="/discover/album/"/>
            <Content>
              <div className="album-roller">
                <button  className="pre btn sprite_02" onClick={e=>CarouselRef.current.prev()}>上一组图片</button>
                <Carousel {...settings} ref={ CarouselRef }>
                    {
                        newAlbums.map((item,index)=>{
                            return(
                              <QJAlbumCover size={100} data={item} key={item} />
                            )
                        })
                    }
                </Carousel>
                <button  className="next btn sprite_02" onClick={e=>CarouselRef.current.next()}>下一组图片</button>
              </div>
            </Content>
        </NewAlbumWrapper>
    )
}



export default memo(QJNewAlbunR)
