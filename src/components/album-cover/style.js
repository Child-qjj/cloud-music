import styled from 'styled-components'





export const AlbumCoverWrapper = styled.div`
  position: relative;
  
  .bg-cover{
      position: relative;
      display: block;
      width: ${props => props.size +"px"};
      height: ${props => props.size +"px"};

    .mask{
          background-position: 0 ${props => props.bgp +"px"};
          position: absolute;
    }  
    .play{
      display: none;
    }
    .icon{
        position: absolute;
        right: 10px;
        bottom: 5px;
        left: 94px;
        width: 28px;
        height: 28px;
    }
    &:hover{
      cursor: pointer;

      .play{
        display: block;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }

  .f-thide{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        a{
          color: #000;
        }
      }

`