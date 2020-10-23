import styled from 'styled-components'



export const HotAnchorWrapper = styled.div `

  margin-top: 30px;

  .tit{
    position: relative;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-weight: bold;
    font-size: 12px;
  }

  .n-hotdj {
    margin: 20px 0 0 20px;

    li{
      display: flex;
      width: 210px;
      height: 50px;

      .cver {
        width: 40px;
        margin-right: 10px;

        img{
          width: 40px;
          height: 40px;
          box-shadow: 0 0 1px #333333 inset;
        }
      }

      .info{
        width: 160px;
        line-height: 21px;

        p{
          width: 100%;

          a{
            display: inline-block;
            zoom: 1;
            max-width: 88%;
            vertical-align: middle;
          }
          .u-icn{
              margin-top: -1px;
              width: 11px;
              height: 13px;
              background-position: 0 1px;
              font-size: 100%;
              font-style: normal;
              display: inline-block;
              overflow: hidden;
              vertical-align: middle;
          }
          
        }
      }
    }

  }
`