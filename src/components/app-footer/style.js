import styled from 'styled-components'




export const FooterWrapper = styled.div`
        height: 172px;
        overflow: hidden;
        border-top: 1px solid #d3d3d3;
        background: #f2f2f2;
        position: relative;

   .content{
        display:flex;
        font-size: 12px;
        color: #333;
        width: 980px;
        margin: 0 auto;
        justify-content: space-between;
   }
   .sep {
        margin-right: 14px;
    }
`

export const FooterLeft = styled.div`
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    .link a{
        color:  #999;
    }
    .line{
        margin: 0 8px 0 10px;
        color: #c2c2c2;
    }
    .s-fc3{
        color:#666;
    }

`

export const FooterRight = styled.ul`
    width: 420px;
    margin-top: 33px;
    display:flex;
    justify-content:space-between;
    .unit{
        width: 60px;
        height: 70px;
        margin-left: 30px;
        text-align: center;
        color: #666;
        :first-child {
            margin-left: 0;
        }
        .logo{
            text-indent: -9999px;
            display: flex;
            width: 50px;
            height: 45px;
            margin: 0 auto;
            background: url(${require('@/assets/img/sprite_footer_03.png')}) no-repeat;
            background-size: 110px 552px;
        }

        :first-child .logo{
                background-position: -63px -456.5px;
        }
        :nth-child(2) .logo{
            background-position: -63px -101px;
        }
        :nth-child(3) .logo{
            background-position: 0 0;
        }
        :nth-child(4) .logo{
            background-position: -60px -50px;
        }
        
        :last-child .logo{
            background-position: 0 -101px;
        }

        .text{
            display: inline-block;
            margin: 5px 5px 0;
            width: 52px;
            height: 14px;
            background: url(${require('@/assets/img/sprite_footer_04.png')}) no-repeat;
            background-size: 180px 139px
        }

        :first-child .text{
            background-position: 0 -108px;
            margin-left: -6px;
            width: 72px;
        }

        :nth-child(2) .text{
            background-position: -1px -91px;
        }
        :nth-child(3) .text{
            background-position: 0 0;
        }
        :nth-child(4) .text{
            background-position: 0 -54px;
        }
        :last-child .text{
            background-position: -1px -72px;
        }
    }

`

