import React, { memo } from 'react';

import { imageSizeFormat } from '@/utils/data-format';

import { CoverWrapper } from './style'

const DZAlbumCover = memo((props) => {

    const {info={},size=110} =props;

    return (
        <CoverWrapper size={size} key={info.id}>
            <div className="album-image">
                <img src={imageSizeFormat(info.blurPicUrl,size)} 
                     alt="" className="bg"/>
                <a href="#/" title={info.name} className="cover">
                    <i className="album-image-shadow" />
                </a>
            </div>
            <div className="album-info">
                <a href="#/" className="album-name text-nowrap">{info.name}</a>
                <a href="#/" className="album-artist text-nowrap">{info.artist.name}</a>
            </div>
        </CoverWrapper>
    )
})

export default DZAlbumCover