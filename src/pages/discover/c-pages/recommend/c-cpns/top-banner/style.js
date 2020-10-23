import styled from 'styled-components'



export const BannerWrapper = styled.div `
    background-image: url(${props => props.bgImage});
    background-size: 6000px;
    background-position:center center;
    .wrap{
        position: relative;
        width: 982px;
        height: 285px;
        margin: 0 auto;
    }
    .f-pr{
        position: relative;
        zoom: 1;
    }
`

export const CarouselWrapper = styled.div `
    &.ban{
        width: 982px;
        height: 285px;
        .my-dots{
            position: absolute;
            top: 259px;
            left: 0;
            width: 730px;
            height: 20px;
            text-align: center;
            margin:0;
            
            li{
                /* display: inline-block;
                width: 20px;
                height: 20px;
                background:url(${require('@/assets/img/banner_sprite.png')}) 0 9999px no-repeat;
                
                background-position: 3px -343px; */
                transition: none;
                button{
                    margin: 0 ;
                    transition: none;
                    width: 20px;
                    height: 20px;
                    background:url(${require('@/assets/img/banner_sprite.png')}) 0 9999px no-repeat;
                    background-position: 3px -343px;
                }
                &.slick-active button{
                    background-position: -16px -343px;
                }
            }
        }
    }
    .ban-img{
        width: 100%;
        height: 285px;
        overflow: hidden;
        img{
            display: block;
            width: 730px;
        }
    }
    button{
        position: absolute;
        display: block;
        top: 50%;
        cursor:pointer;
        margin-top: -31px;
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        background:url(${require('@/assets/img/banner_sprite.png')})0 9999px no-repeat;


        &.pre{
            left: -68px;
            background-position: 0 -360px;
            
            :hover{
                background-position: 0 -430px;
            }
        }
            
        &.next{
            right: -68px;
            background-position: 0 -508px;

            :hover{
                background-position: 0 -578px;
            }
        }
    }
`
export const DownloadWrapper = styled.div `
    &.download{
        position: absolute;
        top: 0;
        z-index: 20;
        right: -1px;
        width: 254px;
        height: 285px;
        background:url(${require('@/assets/img/download.png')}) no-repeat 0 0;
    }
    .btn{
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
    }
    p{
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d
    }
    .shadow{
        display: block;
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 285px;
        background-position: -1px 0;
    }
    .shadowr{
        left: auto;
        right: -20px;
        background-position: -20px 0;
        display: block;
        position: absolute;
        top: 0;
        width: 20px;
        height: 285px;
    }
`