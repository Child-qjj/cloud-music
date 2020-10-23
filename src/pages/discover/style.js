import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
    z-index: 90;
    height: 35px;
   // box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    
    .top{
        height: 34px;
    }
`
export const TopMenu = styled.ul`
    display: flex ; 
    position: relative;
    /* justify-content: space-between; */

    &.menus{
        padding-left: 180px;
    }
    li,a{
        height: 34px;
        text-align: center;

        em{
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            text-align: left;
            line-height: 21px;
        }
    }
    a:hover,a{
        color: #fff;
        text-decoration: none;
    }
    a.active em{
        background-color: #9B0909;
        border-radius: 20px;
    }
`