import styled from 'styled-components'




export const SongsCoverWrapper = styled.li`
    width: 140px;
    height: 204px;
    display: inline-block;
    overflow: hidden;
    padding: 0 0 30px 42px;
    line-height: 1.4;
    
    .cover{
      width: 140px;
      height: 140px;
      position: relative;
      display: block;

      img{
        display: block;
        width: 100%;
        height: 100%;
      }

      .mask{
        background-position: 0 0; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .bottom{
        display: flex;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 27px;
        background-position: 0px -537px;
        color: rgb(204, 204, 204);
        .icon-headset{
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0px -24px;
          margin: 9px 5px 9px 10px;
        }
        .nb{
          margin: 7px 0px 0px;
        }
        .icon-play{
          position: absolute;
          display: inline-block;
          right: 10px;
          bottom: 5px;
          width: 16px;
          height: 17px;
          background-position: 0px 0px;
          &:hover{
            background-position: 0px -60px;
            cursor: pointer;
          }
        }
      }
    }


    .description{
      margin: 8px 0 3px;
      font-size: 14px;
      width: 100%;

      .tit{
        display: inline-block;
        max-width: 100%;
        vertical-align: middle; 
        color: #000;
      }
    }
`