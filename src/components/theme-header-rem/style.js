import styled from 'styled-components'

export const HeaderWrapper =  styled.div`
    display: flex;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    justify-content: space-between;
    
    .left{
        display: flex;
        

        .title{
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            text-decoration: none;
        }
        .keyword{
            margin: 7px 0 0 20px;

            .s-fc3{
                color: #666;
            }
            .line{
                margin: 0 10px;
                color: #ccc;
            }
        }
    }
    
    span.more{
        margin-top: 9px;
        display: flex;
        line-height: 12px;
        
        a{
            color: #666;
        }
    }
    .bg{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background-position: 0 -240px;
    }


`

