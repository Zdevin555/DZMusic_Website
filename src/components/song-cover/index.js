import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import { 
    countFormat,
    imageSizeFormat 
} from '@/utils/data-format.js'

import {
    CoverWrapper,
} from './style';

const DZSongCover = memo((props) => {

    const { playCount = NaN, picUrl,id,name} = props;

    return (
        <CoverWrapper bgImage={imageSizeFormat(picUrl,160)}>
            <div className="cover-top">
                <Link to={"/playlist?id="+id} className="image" title={name}/>
            </div>
            <div className="cover-bottom">
                <span className="left-icon">
                    <span className="play-count">
                        {countFormat(playCount)}
                    </span>
                </span>
                <span className="right-icon"/>
            </div>
        </CoverWrapper>
    )
})

export default DZSongCover