import styled from 'styled-components'



export const RecommendWrapper = styled.div`


`
export const Content = styled.div`
    display: flex;
    width: 982px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background:url(${require('@/assets/img/wrap_01.png')}) repeat-y 100% 100%;

`

export const ContentRight = styled.div`
    position: relative;
    width: 250px;
    zoom: 1;

`

export const ContentLeft = styled.div`
    width: 100%;
    margin-right: -250px;
    .wrap-v3{
        margin-right: 251px;
        padding: 20px 20px 40px;
    }
`
