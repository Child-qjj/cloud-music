import styled from 'styled-components'



export const SettleSingerWrapper = styled.div `
  margin-top: 15px;
  
  .tit{
    display: flex;
    justify-content: space-between;
    position: relative;
    zoom: 1;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;

    span{
      font-weight: bold;
    }
  }

  .u-btn{
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    background-position: right -100px;
    padding: 0 5px 0 0;
    white-space: nowrap;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    
    &:hover{
      color: #333;
      background-position: right -182px;

      i{
        color: #333;
        background-position: 0 -141px;
      }
    }
    i{
      box-sizing: content-box;
      width: 170px;
      font-weight: bold;
      color: #333;
      background-position: 0 -59px;
      padding: 0 15px 0 20px;
      pointer-events: none;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      vertical-align: top;
      text-align: center;
      cursor: pointer;
    }
  }
`


export const SettleSingerList = styled.ul  `
  margin: 6px 0 14px 20px;

  li{
    margin-top: 14px;
    width: 210px;
    height: 62px;
    background: #fafafa;

    a{
      display:flex;
      width: 210px;
      height: 62px;
      background: #fafafa;

      &:hover{
        text-decoration: none;
      }
      .head{
        width: 62px;
        height: 62px;

        img{
          width: 62px;
          height: 62px;
        }
      }

      .ifo{
        width: 133px;
        height: 60px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-left: none;

        h4{
          margin-top: 8px;

          span{
            width: 90%;
            font-size: 14px;
            font-weight: bold;
          }
        }
        p{
          width: 90%;
          margin-top: 8px;
        }
      }
    }
  }
` 