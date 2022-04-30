import React, { memo,useEffect, useMemo, useRef, useState } from 'react';

import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getTopBannerAction} from '../../store/actionCreator';

import {Carousel} from 'antd';
import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight,
  TopBannerControl
} from './style';

const DZTopBanner = memo(() => {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);
  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state =>({
    topBanners:state.getIn(["recommendation","topBanners"])
  }),shallowEqual)
  const dispatch = useDispatch();
  // 其他hooks
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  const bannerRef = useRef();

  const changeBanner = useMemo(()=>{
     return ((from,to)=>{
       setTimeout(()=>{setCurrentIndex(to);},0);
     })
  },[])
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20");
  
  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="content wrap-v2">
        <TopBannerLeft>
          <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={changeBanner}>
            {
              topBanners.map((item,index)=>{
                return (
                  <div key={item.scm} className="item">
                    <a href={item.targetType!==3000?"/song?id="+item.targetId:item.url} 
                       target="_blank">
                      <img className="image" src={item.imageUrl} alt={item.scm}/>
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight/>
        <TopBannerControl>
          <div className="btn left" onClick={e =>{bannerRef.current.prev()}}/>
          <div className="btn right" onClick={e =>{bannerRef.current.next()}}/>
        </TopBannerControl>
      </div>
    </TopBannerWrapper>
  )
});

export default DZTopBanner;