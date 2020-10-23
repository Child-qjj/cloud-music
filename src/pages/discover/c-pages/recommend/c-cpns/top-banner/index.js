import { 
    useEffect,
    useRef,
    useCallback,
    useState
} from 'react'
import React , { memo } from 'react'
import { useDispatch , useSelector , shallowEqual } from 'react-redux'




// import { connect } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators';
import { Carousel } from 'antd';
import { 
    BannerWrapper,
    CarouselWrapper,
    DownloadWrapper
 } from './style'

function QJTopBannner() {
//state
    const [currentIndex, setcurrentIndex] = useState(0)

// redux hooks   
    const { topBanners } = useSelector(state =>({ 
        topBanners:state.getIn(["recommend","topBanners"])
    }),shallowEqual);
    const dispatch = useDispatch() ;
// other hooks
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    const CarouselRef = useRef() ;
    const bannerChange = useCallback(
        (from,to) => {
            setcurrentIndex(to);
        },[])

//其它逻辑
    const urlMatch = (item,id)=>{
        switch (item.targetType) {
            case 1004:
                return "https://music.163.com/mv?id="+id ;

            case 1 :
                return "https://music.163.com/song?id="+id ;
            case 10 :
                return "https://music.163.com/album?id="+id;
            case 3000:
                return item.url;
            default:
                return "#";
        }
    }
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].pic + "?imageView&blur=40x20") ;
    return (
        <BannerWrapper className="IndexBanner" bgImage ={ bgImage }>
            <CarouselWrapper className="ban f-pr wrap" style={{zIndex:10}}>
                <Carousel  fade autoplay ref={CarouselRef} beforeChange={bannerChange} dots={{className:"my-dots"}} speed={100} autoplaySpeed={5000}>    
                    { topBanners.map((item,index)=>{
                    return (
                        <div className="ban-img" key={item.pic}>
                            <a  href={urlMatch(item,item.targetId)}>
                                <img src={item.pic} alt={item.typeTitle}/>
                            </a>
                        </div>
                    )
                    }) }
                    
                </Carousel>
                <button  className="pre btn" onClick={e=>CarouselRef.current.prev()}>上一张图片</button>
                <button  className="next btn" onClick={e=>CarouselRef.current.next()}>下一张图片</button>
                <DownloadWrapper className="download f-pr">
                    <a id="side-download" href="https://music.163.com/download" className="btn" hidefocus="true">下载客户端</a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    <span className="shadow"></span>
                    <span className="shadowr"></span>
                </DownloadWrapper>
            </CarouselWrapper>
        </BannerWrapper>
    )
}




export default memo(QJTopBannner)