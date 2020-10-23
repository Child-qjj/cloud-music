import styled from 'styled-components'




export const TopRankingWrapper = styled.div `
  width: 230px;
  
  .header{
    display: flex;
    height: 100px;
    padding: 20px 0 0 19px;
    box-sizing: content-box;
    
    .img{
      position: relative;
      width: 80px;
      height: 80px;

      img{
        width:100%;
        height:100%;
        
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: -145px -57px;
      }
    }
    
    .tit{
      width: 116px;
      margin: 6px 0 0 10px;
      h3{
        color: #333;
        font-size: 14px;
        width: 100%;
        font-weight: bold;
      }

      .btn-bg{
        display: flex;
        margin-top: 10px;

        .btn{
          width: 22px;
          height: 22px;
          margin-right: 10px;
          text-indent: -9999px;
        }
        .play{
          background-position: -267px -205px;

          &:hover{
            background-position: -267px -235px;
          }
        }
        .favor{
          background-position: -300px -205px;

          &:hover{
            background-position: -300px -235px;
          }
        }
      }
    }
  }  

  .list{
    height: 319px;
    margin-left: 50px;
    box-sizing: content-box;
    .list-item:first-child .rank{
      color: #c10d0c;
    }
    .list-item:nth-child(2) .rank{
      color: #c10d0c;
    }
    .list-item:nth-child(3) .rank{
      color: #c10d0c;
    }
    .list-item{
      display: flex;
      height: 32px;
      line-height: 32px;
      .info{
        display: flex;
        color: #000;
        width: 170px;
        flex :1;
      }
      &:hover{
        .operate{
          display: flex;
          z-index:9999;
          width: 82px;
          margin-top: 7px;

          .btn{
            width: 17px;
            height: 17px;
            margin-right: 10px;
          }
          .play{
            background-position: -267px -268px;

            &:hover{
              background-position: -267px -288px;
            }
          }
          .addto{
            margin: 2px 6px 0 0;
            background-position: 0 -700px;
            display: inline-block;
            overflow: hidden;

            &:hover{
              background-position: -22px -700px;
            }
          }
          .favor{
            background-position: -297px -268px;

            &:hover{
              background-position: -297px -288px;
            }
          }
        }
      }
      .rank{
        position: relative;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      .name{
        width: 170px;
        height: 32px;
        vertical-align: middle;
        color: #000;
      }
      .opreate{
        display: none;
      }
    }
  }
  .footer{
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;

    .s-fc0{
      color: #000;
    }
  }
`