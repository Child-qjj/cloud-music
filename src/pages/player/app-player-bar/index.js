import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'
import {
  NavLink
} from 'react-router-dom'
import {
  Slider
} from 'antd'

import {
  AppPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'
import {
  getSizeImage,
  formatMinuteSecond,
  getPlaySong
} from '@/utils/format-utils'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSong,
  changeLyricIndex
} from '../store/actionCreators'
import {
  QJPlayList
} from './c-cpns'




function QJAppPlayerBar() {

  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTip, setShowTip] = useState("none");
  const [timer, setTimer] = useState(null);
  const [visiable, setVisiable] = useState(false)
  //redux hooks
  const {
    currentSong,
    sequence,
    playList,
    lyricIndex,
    lyricList
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    sequence: state.getIn(["player", "sequence"]),
    playList: state.getIn(["player", "playList"]),
    lyricList: state.getIn(["player", "lyricList"]),
    lyricIndex: state.getIn(["player", "lyricIndex"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(1404885266));
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  }, [currentSong])
  //other hooks
  const audioRef = useRef();
  //other handles
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const artist = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  //handle functions 
  const playMusic = useCallback(() => {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    },
    [isPlaying])
  const timeUpadate = (e) => {
    const EcurrentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(EcurrentTime * 1000);
      setProgress(EcurrentTime * 1000 / duration * 100);
    }
    let i = 0;
    for (; i < lyricList.length; i++) {
      if (lyricList[i].time > EcurrentTime * 1000) {
        break;
      }
    }
    if (lyricIndex !== i - 1) {
      dispatch(changeLyricIndex(i - 1));
    }
  }

  const changeSequence = () => {
    setShowTip(" ");
    if (timer) {
      clearTimeout(timer);
    };
    setTimer(
      setTimeout(() => {
        setShowTip("none");
      }, 3000)
    )
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  }
  const titleName = () => {
    switch (sequence) {
      case 1:
        return "随机"
      case 2:
        return "单曲循环"
      default:
        return "循环"
    }
  }
  const showPlayList = () => {
    setVisiable(!visiable);
  }
  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSong(1));
    }
  }
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSong(tag));
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration]);

  const sliderAfterChange = useCallback((value) => {
    const currentTime = (value / 100) * duration / 1000;
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  return(
    <AppPlayerBarWrapper className="playbar_sprite">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev btn" title="上一首" 
            onClick={ e => changeMusic(-1) }></button>
          <button className="sprite_player play btn" 
            onClick={ playMusic } title="播放/暂停"></button>
          <button className="sprite_player next btn" title="下一首"
            onClick={ e=> changeMusic(1) }></button>
        </Control>
        <PlayInfo>
          <div className="image">
              <img src={getSizeImage(picUrl,35)} alt=""/>
              <NavLink to={`/discover/player?id=${currentSong.id}`} className="sprite_player mask"></NavLink>
          </div>
          <div className="info">
            <div className="song">
              <NavLink to={`/discover/player?id=${currentSong.id}`} className="name" title={currentSong.name}>
                <span className="song-name">{currentSong.name}</span>
              </NavLink>
              <a href="#/" className="singer-name" alt="" title={artist}>{artist}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} 
                      value={progress} 
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={ sequence } showTip={showTip}>
          <div className="left">
            <button className="sprite_player btn favor" title="收藏"></button>
            <button className="sprite_player btn share" title="分享"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop" 
                title={titleName()} 
                onClick={e=>changeSequence()} />  
            <button className="sprite_player btn playlist" title="播放列表"
              onClick={e => showPlayList() }
              >
              {playList.length}
            </button>
            <div className="tip sprite_player">
              {titleName()}
            </div>
          </div>
        </Operator>
      </div>
    <audio  ref={audioRef} 
            onTimeUpdate={e=>timeUpadate(e)} 
            onEnded={e => handleMusicEnded() }  />
    {
      visiable && 
      <QJPlayList 
        playlist={playList}
        setVisiable={setVisiable} 
        currentSong ={currentSong} 
        lyricList={lyricList}
        lyricIndex={lyricIndex} />
    }
  </AppPlayerBarWrapper>
  )
}



export default memo(QJAppPlayerBar);