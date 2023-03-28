import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { eventBus } from '@/common/local-data';

import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import {
  imageSizeFormat,
  imageBlurFormat,
  dateFormat
} from '@/utils/data-format';

import { mouseDownEvent } from '@/utils/mouse-event';

import { REPEAT_MODE } from '@/common/local-data';
import {
  getCurrentMusicInfoAction,
  changeRepeatModeAction,
  changeCurrentLrcIndexAction
} from './store/actionCreator';

import {
  BarWrapper,
  Controller,
  SongInfo,
  PlayList,
  Volume,
  ScrollHandler
} from './style';

const DZPlayerBar = memo(() => {

  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [progValue, setProgValue] = useState(0);
  const [volValue, setVolValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isShowVol, setIsShowVol] = useState(false);
  const [isShowList, setIsShowList] = useState(false);
  const [shuffleList, setShuffleList] = useState([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [handlerOffsetTop, setHandlerOffsetTop] = useState(0);
  

  const dispatch = useDispatch();
  const {
    currentMusicInfo,
    barPlaylist = [],
    currentMusicIndex,
    repeatMode,
    currentLyric,
    currentLrcIndex,
    currentUrl
  } = useSelector(state => ({
    currentMusicInfo: state.getIn(["playerBar", "currentMusicInfo"]),
    barPlaylist: state.getIn(["playerBar", "barPlaylist"]),
    currentMusicIndex: state.getIn(["playerBar", "currentMusicIndex"]),
    repeatMode: state.getIn(["playerBar", "repeatMode"]),
    currentLyric: state.getIn(["playerBar", "currentLyric"]),
    currentLrcIndex: state.getIn(["playerBar", "currentLrcIndex"]),
    currentUrl: state.getIn(["playerBar", "currentUrl"]),
  }), shallowEqual);

  const audioRef = useRef();
  const containerRef = useRef();
  const screenRef = useRef();
  const lrcHighlightRef = useRef();
  const handlerRef = useRef();
  const playlistRef = useRef();

  useEffect(() => {
    dispatch(getCurrentMusicInfoAction(1945315976));  
  }, [dispatch])

  const imageUrl = (currentMusicInfo.al && currentMusicInfo.al.picUrl) || "";
  const songName = currentMusicInfo.name || "Unknown";
  const singer = (currentMusicInfo.ar && currentMusicInfo.ar[0].name) || "Unknown";
  const duration = currentMusicInfo.dt || 0;
  const showDuration = dateFormat(duration, "mm:ss");
  const showCurTime = dateFormat(currentTime, "mm:ss");
  const showlist = isShowList ? "block" : "none";
  const showVol = isShowVol ? "block" : "none";
  const screenHeight = 245;
  const lineHeight = 35;
  const frameHeight = 286;
  const fraction = 2/7;
  const handlerHeight = frameHeight*screenHeight/(lineHeight*currentLyric.length)

  const updateLyrics = useCallback((time) => {
    setContainerHeight(containerRef.current.scrollHeight);
    const offsetTop = lrcHighlightRef.current.offsetTop;

    let lrcIndex = 0;
    for (; lrcIndex < currentLyric.length; lrcIndex++) {
      let lyricItem = currentLyric[lrcIndex];
      if (time * 1000 < lyricItem.totalTime) {
        break;
      }
    }

    let handlerScrollDist = 0;
    let lineScrollDist = 0;
    if(offsetTop<screenHeight*fraction){
      lineScrollDist = 0;
      handlerScrollDist = 0;
    }else if(offsetTop>=containerHeight-screenHeight*(1-fraction)){
      lineScrollDist = containerHeight-screenHeight;
      handlerScrollDist = frameHeight-handlerHeight;
    }else{
      lineScrollDist = offsetTop - screenHeight*fraction;
      handlerScrollDist = handlerOffsetTop+(frameHeight-handlerHeight)/(currentLyric.length-7);
    }
    
    if (currentLrcIndex !== lrcIndex - 1) {
      dispatch(changeCurrentLrcIndexAction(lrcIndex - 1));
      containerRef.current.scrollTop = lineScrollDist;
      console.log(lineScrollDist);
      setHandlerOffsetTop(handlerScrollDist);
      handlerRef.current.style.top = handlerOffsetTop+"px";
    }
  }, [currentLrcIndex, currentLyric, dispatch, containerHeight, screenHeight, fraction, handlerOffsetTop, handlerHeight]);

  const updateAudioTime = useCallback((event) => {
    const currentAudioTime = event.target.currentTime
    updateLyrics(currentAudioTime);
    if (!isDragging) {
      setCurrentTime(currentAudioTime * 1000);
      setProgValue(currentAudioTime * 1000 / duration * 500)
    }

  }, [updateLyrics, isDragging, duration]);

  const changeProgSliderValue = useCallback((value) => {
    setIsDragging(true);
    setProgValue(value);
    setCurrentTime(value * duration / 500);
  }, [duration]);

  const AfterProgSliderchanged = useCallback((value) => {
    setIsDragging(false);
    const newTime = value / 500 * duration;
    audioRef.current.currentTime = newTime / 1000;
    setProgValue(value);
    setCurrentTime(newTime);
    updateLyrics(newTime / 1000);
  }, [duration, updateLyrics]);

  const showVolume = () => {
    isShowVol ? setIsShowVol(false) : setIsShowVol(true);
  }

  const changeVolSliderValue = (value) => {
    setVolValue(value * 100);
    audioRef.current.volume = value;
  };

 
  const switchPlaylist = () => {
    isShowList ? setIsShowList(false) : setIsShowList(true);
  }

  const shufflePlaylist = useCallback((currentMusicInfo) => {
    const shuffleList = [...barPlaylist];
    do {
      shuffleList.sort(() => Math.random() - 0.5);
    } while (shuffleList[0].id !== currentMusicInfo.id)
    return shuffleList;
  }, [barPlaylist]);

  const changeRepeatMode = useCallback((repeatMode) => {
    if (repeatMode === REPEAT_MODE.SHUFFLE) {
      dispatch(changeRepeatModeAction(REPEAT_MODE.REPEAT_ALL));
    } else if (repeatMode === REPEAT_MODE.REPEAT_ONE) {
      audioRef.current.loop = "";
      dispatch(changeRepeatModeAction(REPEAT_MODE.SHUFFLE));
      setShuffleList(shufflePlaylist(currentMusicInfo));
    } else {
      dispatch(changeRepeatModeAction(REPEAT_MODE.REPEAT_ONE));
    }
  }, [dispatch, currentMusicInfo, shufflePlaylist]);

  const switchMusicProcess = useCallback((audio) => {
    if (!isPaused) {
      setIsPaused(true);
      if (barPlaylist.length === 1 || shuffleList.length === 1) {
        audio.load();
      }
      setTimeout(() => {
        setIsPaused(false);
        audio.play();
      }, 1000);
    }
  }, [isPaused, shuffleList, barPlaylist]);

  const changeCurrentMusic = useCallback((id) => {
    dispatch(getCurrentMusicInfoAction(id));
    setTimeout(() => { switchMusicProcess(audioRef.current); }, 1000);
  }, [dispatch, switchMusicProcess]);

  useEffect(() => {
    eventBus.addListener("playThisMusic", id => changeCurrentMusic(id));
    return () => {
      eventBus.removeAllListeners("playThisMusic");
    }
  }, [changeCurrentMusic]);

  const changeCurrentMusicBySequence = useCallback((sequenceTag) => {
    if (repeatMode !== REPEAT_MODE.SHUFFLE) {
      let currentIndex = currentMusicIndex + sequenceTag;
      if (currentIndex < 0) {
        currentIndex = barPlaylist.length - 1;
      } else if (currentIndex >= barPlaylist.length) {
        currentIndex = 0;
      }
      changeCurrentMusic(barPlaylist[currentIndex].id);
    } else {
      let currentIndex = shuffleList.findIndex(item => item.id === currentMusicInfo.id);
      currentIndex += sequenceTag;
      if (currentIndex < 0) {
        currentIndex = shuffleList.length - 1;
      } else if (currentIndex >= shuffleList.length) {
        currentIndex = 0;
      }
      changeCurrentMusic(shuffleList[currentIndex].id);
    }
  }, [repeatMode, shuffleList, barPlaylist, currentMusicIndex, currentMusicInfo, changeCurrentMusic]);

  const autoPlayNextMusic = useCallback((audio) => {
    if (repeatMode !== REPEAT_MODE.REPEAT_ONE) {
      changeCurrentMusicBySequence(1);
    } else {
      audio.loop = "loop";
      setTimeout(() => switchMusicProcess(audio), 0);
    }
  }, [changeCurrentMusicBySequence, repeatMode, switchMusicProcess]);

  const pauseCtrl = useCallback((audio) => {
    if (isPaused) {
      audio.play();
      setIsPaused(false)
    } else {
      audio.pause();
      setIsPaused(true);
    }
  }, [isPaused]);

  const switchCtrl = useCallback((sequenceTag) => {
    changeCurrentMusicBySequence(sequenceTag);
  }, [changeCurrentMusicBySequence]);

  return (
    <BarWrapper className="sprite-play-bar" repeatMode={repeatMode}>
      <div className="wrap-v2">
        <div className="bar-position">
          <div className="bar-content">
            <div className="bar-left">

              <Controller isPaused={isPaused}>
                <button className="prev sprite-play-bar" onClick={e => switchCtrl(-1)} />
                <button className="play-pause sprite-play-bar" onClick={e => pauseCtrl(audioRef.current)} />
                <button className="next sprite-play-bar" onClick={e => switchCtrl(1)} />
              </Controller>

              <SongInfo>
                <div className="image">
                  <img src={imageSizeFormat(imageUrl, 40)} alt="" />
                  <Link to="#/" className="image-cover sprite-play-bar" />
                </div>
                <div className="detail">
                  <div className="info">
                    <a href="#/" className="song-name">{songName}</a>
                    <a href="#/" className="singer">{singer}</a>
                    <a href="#/" className="from sprite-play-bar">link</a>
                  </div>
                  <div className="progress">
                    <div className="progress-slider">
                      <Slider value={progValue}
                        max={500}
                        onChange={progValue => changeProgSliderValue(progValue)}
                        onAfterChange={progValue => AfterProgSliderchanged(progValue)} />
                    </div>
                    <div className="time-info">
                      <span className="current">{showCurTime}</span>
                      <span className="divider1">/</span>
                      <span className="duration">{showDuration}</span>
                    </div>
                  </div>
                </div>
              </SongInfo>

            </div>

            <div className="bar-right">
              <button className="sprite-play-bar lyrics" title="lyrics" />
              <button className="sprite-play-bar favor" title="favor" />
              <button className="sprite-play-bar share" title="share" />
              <div className="sprite-play-bar divider2" />
              <button className="sprite-play-bar volume"
                title="volume"
                onClick={e => showVolume()}>
                <Volume isShowVol={showVol} className="bar-palyer-vol">
                  <Slider vertical
                    value={volValue}
                    onChange={volValue => { changeVolSliderValue(volValue / 100) }}
                  />
                </Volume>
              </button>
              <button className="sprite-play-bar repeat_mode"
                title={REPEAT_MODE.properties[repeatMode].name}
                onClick={e => changeRepeatMode(repeatMode)} />
              <button className="sprite-play-bar playlist"
                onClick={e => switchPlaylist()}
                title="playlist">
                <span>{barPlaylist.length}</span>
              </button>
            </div>
          </div>
          <PlayList isShow={showlist} 
                    className="bar-player-playlist"
                    ref={playlistRef}>
            <div className="playlist-header">
              <div className="playlist-header-left">
                <div className="playlist-title">
                  <span>{"Playlist(" + barPlaylist.length + ")"}</span>
                </div>
                <div className="playlist-operator">
                  <div className="collect">Collect All</div>
                  <span className="divider">|</span>
                  <div className="delete">Delete All</div>
                </div>
              </div>
              <div className="playlist-header-right">
                <span>{songName}</span>
              </div>
            </div>
            <div className="playlist-main">
              <img className="playlist-bg"
                src={imageBlurFormat(imageUrl)}
                alt="" />
              <div className="playlist-main-left">
                <div className="playlist-main-left-mask" />
                <ul className="playlist-content">
                  {
                    barPlaylist.map((item, index) => {
                      return (
                        <li key={item.id}
                          className={"playlist-item" + (currentMusicInfo.id === item.id ? " selected" : "")}
                          onClick={e => changeCurrentMusic(item.id)}>
                          <div className="playlist-item-col1 col" />
                          <div className="playlist-item-col2 col">
                            <span>{item.name}</span>
                          </div>
                          <div className="playlist-item-col3 col">
                            <div className="col3-icon favor" title="favor" />
                            <div className="col3-icon share" title="share" />
                            <div className="col3-icon download" title="download" />
                            <div className="col3-icon delete" title="delete" />
                          </div>
                          <div className="playlist-item-col4 col">
                            <a href="#/" className="text-nowrap">{item.ar[0].name}</a>
                            <span>{dateFormat(item.dt, "mm:ss")}</span>
                            <a href="#/" title="From Singer" className="link-icon">link</a>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="playlist-main-right">
                <div className="frame-left" />
                <div className="frame-middle" ref={screenRef}>
                  <div className="lyric-container" ref={containerRef}>
                    {
                      currentLyric.map((item, index) => {
                        return (
                          (index === currentLrcIndex ?
                            <p className="active item"
                              ref={lrcHighlightRef}
                              key={index}>{item.content}
                            </p> :
                            <p className="item"
                              key={index}>{item.content}
                            </p>
                          )
                        )
                      })
                    }
                  </div>
                </div>
                <div className="frame-right">
                </div>
              </div>
            </div>
            <ScrollHandler className="scroll-handler">
              <span className="handler"
                    ref={handlerRef}
                    style = {{height:handlerHeight+"px"}}
                    onMouseDown={e=>mouseDownEvent(e,containerRef.current,frameHeight,playlistRef.current)}/>
            </ScrollHandler>
          </PlayList>
        </div>
      </div>
      <audio src={currentUrl}
        ref={audioRef}
        onTimeUpdate={e => updateAudioTime(e)}
        onEnded={e => { autoPlayNextMusic(e.target) }}
      />
    </BarWrapper>
  )
})

export default DZPlayerBar;