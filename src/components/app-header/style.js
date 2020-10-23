import styled from 'styled-components'

export const HeaderWrapper =   styled.div`
    height: 70px;
    font-size: 14px;
    color: #fff;
    background-color: #242424;
    
    .content{
        height:70px;

        display:flex;
        justify-content:space-between;
    }
    .divider{
        height:5px;
        background-color:#c20c0c
    }

`


export const HeaderLeft = styled.div`
    display:flex;

    .logo{
        display:block;
        width:176px;
        height:69px;
        background-position:0 0;
        text-indent: -9999px;
    }

    .select-list{
        display:flex;
        line-height:70px;

        .select-item {
            position:relative;
            a{
                display:block;
                padding:0 20px;
                color:#ccc;
            }
            
            :last-of-type a{
                position:relative;
                ::after{
                    position: absolute;
                    content:"";
                    top: 20px;
                    right: -15px;
                    width: 28px;
                    height: 19px;
                    background-position: -190px 0;
                    background-image:url(${require("@/assets/img/sprite_01.png")});
                }
            }

            &:hover a,a.active{
                color:#fff;
                background-color:#000;
                text-decoration:none;
            }

            .active .icon{
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left:50%;
                transform: translate(-50%,0);
                background-position:-226px 0;
            }
        }
    }
`


export const HeaderRight = styled.div`
    display:flex;
    align-items:center;
    color:#ccc;
    font-size:12px;

    .search{
        width: 158px;
        height: 32px;
        border-radius: 32px;

        input {
            &::placeholder{
                font-size: 12px;
            }
        }
    }
    .center{
        width: 90px;
        height: 32px;
        margin: 0 16px;
        padding-left: 16px;
        border: 1px solid #4F4F4F;
        background-position: 0 -140px;
        line-height: 33px;
        color: #ccc;
        border-radius: 20px;
        :hover{
            color: #fff;
            text-decoration: none;
            border: 1px solid #ccc;
        }
    }

    .login{
        height: 45px;
        margin: 0 16px;
        padding: 0 22px 0 0;
        background-position: right -47px;
        background-image: none;

        .link{
            display: block;
            width: 28px;
            margin-top: 14px;
            color:#999;
            cursor: pointer;

            &:hover{
                color: #787878;
            }
        }
    }

`