import styled from 'styled-components'

export const PlayListWrapper = styled.div `
    position: absolute;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 301px;
    margin-left: -493px;

    .play-list{
      position: absolute;
      box-sizing: content-box;
      left: 0;
      top: 41px;
      width: 976px;
      height: 260px;
      overflow: hidden;
      background-position: -1014px 0;
      background-repeat: repeat-y;
      padding: 0 5px;

      .mask{
        position: absolute;
        left: 2px;
        top: 0;
        z-index: 2;
        width: 558px;
        height: 260px;
        background: #121212;
        opacity: .5;
      }

      .mask2{
        position: absolute;
        left: 560px;
        top: 0;
        z-index: 3;
        width: 420px;
        height: 250px;
        background: #121212;
        opacity: .01;
      }

      .img_bg{
        top: -360px;
        left: 2px;
        z-index: 1;
        width: 980px;
        height: auto;
        opacity: .2;
        img{
            border: 0;
        }
      }
    }
    
`

export const WrapperHeader = styled.div `
    background-position: 0 0;
    height: 41px;
    padding: 0 5px;

    .listhdc{
        position: relative;
        height: 40px;

        h4{
            position: absolute;
            left: 25px;
            top: 0;
            height: 39px;
            line-height: 39px;
            font-size: 14px;
            color: #e2e2e2;
        }

        .favor_all{
            display: flex;
            left: 398px;
            position: absolute;
            top: 12px;
            height: 15px;
            line-height: 15px;
            color: #ccc;

            &:hover{
                color: #e2e2e2;
                text-decoration: underline;
                .icon{
                  background-position: -24px -20px;
                }
            }

            .icon{
                margin: 1px 6px 0 0;
                width: 16px;
                background-position: -24px 0;
                height: 16px;
            }
        }

        .clear{
          position: absolute;
          display: flex;
          left: 490px;
          top: 12px;
          height: 15px;
          line-height: 15px;
          color: #ccc;

          &:hover{
                color: #e2e2e2;
                text-decoration: underline;
                .icon_del{
                  background-position: -51px -20px;
                }
            }

            .icon_del{
                margin: 1px 6px 0 0;
                width: 13px;
                background-position: -51px 0;
                height: 16px;
            }
          
        }

        .line{
          position: absolute;
          top: 13px;
          left: 477px;
          height: 15px;
          border-left: 1px solid #000;
          border-right: 1px solid #2c2c2c;
        }

        .song_name{
          position: absolute;
          left: 595px;
          top: 0;
          width: 346px;
          text-align: center;
          height: 39px;
          line-height: 39px;
          color: #fff;
          font-size: 14px;
        }

        .close{
          position: absolute;
          top: 6px;
          right: 8px;
          width: 30px;
          height: 30px;
          overflow: hidden;
          text-indent: -999px;
          cursor: pointer;
          background-position: -195px 9px;

          &:hover{
            background-position: -195px -21px;
          }
        }
    }
`

export const Contentleft = styled.div `

    position: absolute;
    left: 2px;
    top: 0;
    z-index: 4;
    height: 260px;
    width: 553px;
    overflow-y: auto;

    &::-webkit-scrollbar{
      width:6px;
      height:10px;
      /**/
    }
    &::-webkit-scrollbar-track{
      width: 4px;
      height: 260px;
      background: #000;
      opacity: .5;
 
    }
    &::-webkit-scrollbar-thumb{
      border-radius:5px;
      width: 6px;
      background: #868686;
      border: 1px solid #a6a6a6;
      opacity: .8;
    }
    &::-webkit-scrollbar-thumb:hover{
      background: #868686;
      cursor: pointer;
    }
    &::-webkit-scrollbar-corner{
      background: #179a16;
    }

    ul{
      color: #ccc;
      overflow: hidden;

      .list-items{
        display: flex;
        &:hover{
          background-color: rgba(0,0,0,0.4);

          .col-3 .icns{
            display: flex;
          }
        }

        .playicn{
          display: none;
          margin-top: 8px;
          width: 10px;
          height: 13px;
          background-position: -182px 0;
        }

        .col{
          padding-left: 10px;
          overflow: hidden;
          cursor: pointer;

          a{
            color: #fff;
          }
        }

        .col-3{
          position: relative;

          .icns{
            display: none;
            position: absolute;
            flex-direction: row-reverse;
            right: 0;
            top: 0;
            width: 100px;
            height: 23px;

            .ico{
              text-indent: -9999px;
              overflow: hidden;
              height: 16px;
              margin: 7px 0 0 10px;
            }

            .ico-add{
              width: 17px;
              background-position: -24px 0;

              &:hover{
                background-position: -24px -20px;
              }
            }

            .ico-del{
              width: 13px;
              background-position: -51px 0;

              &:hover{
                background-position: -51px -20px;
              }
            }

            .ico-dl{
              width: 14px;
              background-position: -57px -50px;

              &:hover{
                background-position: -80px -50px;
              }
            }

            .ico-share{
              width: 14px;
              background-position: 0 0;

              &:hover{
                background-position: 0 -20px;
              }
            }

          }
        }
        .col-4{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .col-6{
          padding-left: 6px;
          display: flex;

          a.ico-src{
            width: 14px;
            margin-left: 0;
            background-position: -80px 0px;
            overflow: hidden;
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            height: 16px;

            &:hover{
              background-position: -80px -20px;
            }
          }
        }
      }

      .play{
        background-color: rgba(0,0,0,0.3);

        .playicn{
          display: block;
        }
      }
    }
`
export const ContentRight = styled.div `
    position: absolute;
    right: 40px;
    top: 0;
    z-index: 4;
    margin: 21px 0 20px 0;
    height: 219px;
    width: 354px;
    overflow-y: auto;

    &::-webkit-scrollbar{
      width: 6px;
      height: 260px;
      background: #000;
      opacity: .5;
      /**/
    }
    &::-webkit-scrollbar-track{
      width: 4px;
      height: 260px;
      background: #000;
      opacity: .5;
 
    }
    &::-webkit-scrollbar-thumb{
      border-radius:5px;
      width: 6px;
      background: #868686;
      border: 1px solid #a6a6a6;
      opacity: .8;
    }
    &::-webkit-scrollbar-thumb:hover{
      background: #868686;
      cursor: pointer;
    }
    &::-webkit-scrollbar-corner{
      background: #179a16;
    }

    p{
      color: #989898;
      text-align: center;
      line-height: 32px;
      height: auto !important;
      min-height: 32px;
      transition: color 0.7s linear;

      &.active{
        color: #fff;
        font-size: 14px;
        transition: color 0.7s linear;
      }
    }
`