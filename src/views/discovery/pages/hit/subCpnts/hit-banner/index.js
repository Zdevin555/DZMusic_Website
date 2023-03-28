import React, { memo,useEffect, useMemo, useRef, useState } from 'react';

import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getHitBannersAction} from '../../store/actionCreator';

import {Carousel} from 'antd';
import {
  HitBannerWrapper,
  HitBannerLeft,
  HitBannerRight,
  HitBannerControl
} from './style';

const DZHitBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { hitBanners } = useSelector(state =>({
    hitBanners:state.getIn(["hit","hitBanners"])
  }),shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHitBannersAction());
  }, [dispatch])

  const bannerRef = useRef();

  const changeBanner = useMemo(()=>{
     return ((from,to)=>{
       setTimeout(()=>{setCurrentIndex(to);},0);
     })
  },[])
  const bgImage = hitBanners[currentIndex] && (hitBanners[currentIndex].imageUrl+"?imageView&blur=40x20");
  
  return (
    <HitBannerWrapper bgImage={bgImage}>
      <div className="content wrap-v2">
        <HitBannerLeft>
          <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={changeBanner} className="ant-carousel">
            {
              hitBanners.map((item,index)=>{
                return (
                  <div key={item.scm} className="item">
                    <a href={item.targetType!==3000?"/song?id="+item.targetId:item.url} 
                       target="#/">
                      <img className="image" src={item.imageUrl} alt={item.scm}/>
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </HitBannerLeft>
        <HitBannerRight/>
        <HitBannerControl>
          <div className="btn left" onClick={e =>{bannerRef.current.prev()}}/>
          <div className="btn right" onClick={e =>{bannerRef.current.next()}}/>
        </HitBannerControl>
      </div>
    </HitBannerWrapper>
  )
});

export default DZHitBanner;