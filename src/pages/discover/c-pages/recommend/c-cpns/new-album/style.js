import styled from 'styled-components'





export const NewAlbumWrapper = styled.div`

`

export const Content = styled.div `
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;

    .al-cover{
      margin-left: 11px;
      background-position: -260px 100px;

      .bg-cover{
        margin-bottom: 7px;

        .mask{
          width: 118px;
          height: 100px;
          top: 0;
          left: 0;
        }

        .icon{
          left: 72px;
          width: 22px;
          height: 22px;
          background-position: 0 -85px;

          &:hover{
            background-position: 0 -110px;
          }
        }
      }
    }
    
    .album-roller{
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;      
      
      .ant-carousel{
        position: absolute;
        top: 0;
        width: 645px;
        margin: 28px 0 0 0;
      }
      .btn{
        position: absolute;
        cursor: pointer;
        top: 71px;
        width: 17px;
        height: 17px;
        text-indent:-9999px;
      }
      .f-thide{
        font-size: 12px;
        width: 90%;
        line-height: 18px;  

        a{
          color: #000;
        }
      }
      .pre{
        left: 4px;
        background-position: -260px -75px;

        &:hover{
          background-position: -280px -75px;
        }
      }
      .next{
        right: 4px;
        background-position: -300px -75px;

        &:hover{
          background-position: -320px -75px;
        }
      }
    }

`