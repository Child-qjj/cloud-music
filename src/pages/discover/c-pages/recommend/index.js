import React, { memo  } from 'react'




import { 
    QJSettleSinger,
    QJTopBanners,
    QJHotRecommend,
    QJNewAlbumR,
    QJTopListR,
    QJUserLogin,
    QJHotAnchor
 } from './c-cpns'


import { 
    RecommendWrapper,
    Content,
    ContentLeft,
    ContentRight
 } from './sytle'
// 使用hooks 函数

function QJRecommend(props) {
    return (
        <RecommendWrapper >  
            <QJTopBanners/>
            <Content className="discover-module">
                <ContentLeft>
                    <div className="wrap-v3">
                            <QJHotRecommend/>
                            <QJNewAlbumR/>
                            <QJTopListR/>
                    </div>
                </ContentLeft>
                <ContentRight>
                    <QJUserLogin />
                    <QJSettleSinger/>
                    <QJHotAnchor/>
                </ContentRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(QJRecommend);




// 不使用钩子函数
// function QJRecommend(props) {

//     const { getBanners , topBanners } = props;
    
//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div className="recommend">  
//             <h1>{topBanners.length}</h1>
//         </div>
//     )
// }

// const mapStateToProps = state =>({
//     topBanners:state.recommend.topBanners
// });

// const mapDisptchToProps = dispatch =>({
//     getBanners:()=>{
//         dispatch(getTopBannerAction());
//     }
// })

// export default connect(mapStateToProps,mapDisptchToProps)(memo(QJRecommend))
