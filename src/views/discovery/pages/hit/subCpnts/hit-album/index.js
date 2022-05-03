import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { imageSizeFormat } from '@/utils/data-format';

import { Link } from 'react-router-dom';
import {Carousel} from 'antd';
import DZHitHeader from '../hit-header';
import { getHitAlbumsAction } from '../../store/actionCreator'
import {
  AlbumCover,
  HitAlbumWrapper,
  AlbumControl
} from './style'


const DZHitAlbum = memo(() => {

  const dispatch = useDispatch();
  const { hitAlbums } = useSelector(state => ({
    hitAlbums: state.getIn(["hit", "hitAlbums"])
  }), shallowEqual);

  const albumRef = useRef();
  useEffect(() => {
    dispatch(getHitAlbumsAction(10,"hot"));
  }, [dispatch]);

  return (
    <HitAlbumWrapper>
      <div className="hit-header">
        <DZHitHeader title={"New Albums"} />
      </div>
      <div className="albums">
      <Carousel easing="linear"
                ref={albumRef}
                dots={false}
                slidesToShow={5}
                slidesToScroll={5}>
        {
          hitAlbums.map((item, index) => {
            return (
              <AlbumCover key={item.id}
                className="album-item"
                bgImage={imageSizeFormat(item.blurPicUrl, 110)}>
                <Link to="#/" className="album-image" title={item.name}>
                  <i className="album-image-shadow"/>
                </Link>
                <Link to="#/" className="album-name text-nowrap">{item.name}</Link>
                <Link to="#/" className="album-artist text-nowrap">{item.artist.name}</Link>
              </AlbumCover>
            )
          })
        }
        </Carousel>
        <AlbumControl>
          <div className="albums-control-left" onClick={e=>{albumRef.current.prev()}}/>
          <div className="albums-control-right" onClick={e=>{albumRef.current.next()}}/>
        </AlbumControl>
      </div>
    </HitAlbumWrapper>
  )
})

export default DZHitAlbum