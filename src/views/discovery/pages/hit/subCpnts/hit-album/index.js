import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import DZAlbumCover from '@/components/album-cover';
import { Carousel } from 'antd';
import DZHitHeader from '../hit-header';
import { getHitAlbumsAction } from '../../store/actionCreator'
import {
  HitAlbumWrapper,
  AlbumControl
} from './style'


const DZHitAlbum = memo(() => {

  const dispatch = useDispatch();
  const { hitAlbums = [] } = useSelector(state => ({
    hitAlbums: state.getIn(["hit", "hitAlbums"])
  }), shallowEqual);

  const albumRef = useRef();
  useEffect(() => {
    dispatch(getHitAlbumsAction(10));
  }, [dispatch]);

  return (
    <HitAlbumWrapper>
      <div className="hit-header">
        <DZHitHeader title={"New Albums"} />
      </div>
      <div className="albums">
        <Carousel className="album-content"
          ref={albumRef}
          dots={false}
          slidesToShow={5}
          slidesToScroll={5}>
          {
            hitAlbums.map((item, index) => {
              return (
                <DZAlbumCover info={item} size={110} key={item.id}/>
              )
            })
          }
        </Carousel>
        <AlbumControl>
          <div className="albums-control-left" onClick={e => { albumRef.current.prev() }} />
          <div className="albums-control-right" onClick={e => { albumRef.current.next() }} />
        </AlbumControl>
      </div>
    </HitAlbumWrapper>
  )
})

export default DZHitAlbum