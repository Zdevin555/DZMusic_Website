import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { 
  imageSizeFormat,
  imageBlurFormat,
  dateFormat,
  getMusicUrl
} from '@/utils/data-format'

import { 
  getCurrentMusicInfoAction,
  // getMusicUrlAction 
} from './store/actionCreator';

import {
  BarWrapper,
  Controller,
  SongInfo,
  PlayList
} from './style';


const DZPlayerBar = memo(() => {

  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isShowList, setIsShowList] = useState(false);

  const dispatch = useDispatch();
  const { currentMusicInfo,barPlaylist=[] } = useSelector(state => ({
    currentMusicInfo: state.getIn(["playerBar", "currentMusicInfo"]),
    barPlaylist:state.getIn(["playerBar", "barPlaylist"]),
  }), shallowEqual);

  const sliderRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getCurrentMusicInfoAction(420513158,barPlaylist));
  }, [dispatch,barPlaylist])

  const imageUrl = (currentMusicInfo.al && currentMusicInfo.al.picUrl) || " ";
  const songName = currentMusicInfo.name || "Unknown";
  const singer = (currentMusicInfo.ar && currentMusicInfo.ar[0].name) || "Unknown";
  const musicUrl = getMusicUrl(currentMusicInfo.id);
  const duration = currentMusicInfo.dt || 0;
  const showDuration = dateFormat(duration,"mm:ss");
  const showCurTime = dateFormat(currentTime,"mm:ss");
  const showlist = isShowList?"block":"none";

  const pauseCtrl = useCallback((audio) =>{
    if(isPaused){
       audio.play();
       setIsPaused(false)
    }else{
       audio.pause();
       setIsPaused(true);
    }
  },[isPaused]);

  //usecallback 包裹的是子组件，下面这个不是
  const updateAudioTime = (event) =>{
    if(!isDragging){
      setCurrentTime(event.target.currentTime*1000);
      setValue(event.target.currentTime*1000/duration*500)
    }
  };

  const changeSliderValue = useCallback((value) =>{
    setIsDragging(true);
    setValue(value);
    setCurrentTime(value*duration/500);
  },[duration]);

  const AfterSliderchanged = useCallback((value) =>{
    setIsDragging(false);
    audioRef.current.currentTime = value/500*duration/1000;
    setValue(value);
    setCurrentTime(value/500*duration);
  },[duration]);

  const switchPlaylist = () =>{
    isShowList?setIsShowList(false):setIsShowList(true);
  }

  return (
    <BarWrapper className="sprite-play-bar">
      <div className="wrap-v2">
        <div className="bar-position">
          <div className="bar-content">
            <div className="bar-left">
              <Controller isPaused={isPaused}>
                <button className="prev sprite-play-bar" />
                <button className="play-pause sprite-play-bar" onClick={e=>pauseCtrl(audioRef.current)}/>
                <button className="next sprite-play-bar" />
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
                    <div className="slider">
                      <Slider ref={sliderRef} 
                              value={value}
                              max={500} 
                              onChange={value=>changeSliderValue(value)}
                              onAfterChange={value=>AfterSliderchanged(value)}/>
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
                <button className="sprite-play-bar lyrics"/>
                <button className="sprite-play-bar favor"/>
                <button className="sprite-play-bar share"/>
                <div className="sprite-play-bar divider2"/>
                <button className="sprite-play-bar volume"/>
                <button className="sprite-play-bar cycle-mode"/>
                <button className="sprite-play-bar playlist" 
                        onClick={e=>switchPlaylist()}/>
            </div>
          </div>
        </div>
      </div>
      <audio src={musicUrl} 
             ref={audioRef} 
             onTimeUpdate={e=>updateAudioTime(e)}/>
      <PlayList isShow={showlist}>
          <div className="playlist-header"></div>
          <div className="playlist-main">
            <img className="playlist-bg" 
                    src={imageBlurFormat(imageUrl)}
                    alt=""/>
            <div className="playlist-left">
              <div className="playlist-left-mask"/>
              <ul className="playlist-content">
              {
                barPlaylist.map((item,index)=>{
                  return(
                    <li key={item.id} className="playlist-item">
                      <div className="playlist-item-col1 col"/>
                      <div className="playlist-item-col2 col">
                        <span>{item.name}</span>
                      </div>
                      <div className="playlist-item-col3 col"/>
                      <div className="playlist-item-col4 col">
                        <a href="#/">{item.ar[0].name}</a>
                        <span>{dateFormat(item.dt,"mm:ss")}</span>
                        <a href="#/" title="来自歌手">link</a>
                      </div>
                    </li>
                  )
                })
              }
              </ul>
            </div>
            <div className="playlist-right"> 
            </div>
          </div>
      </PlayList>
    </BarWrapper>
  )
})

export default DZPlayerBar