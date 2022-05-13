import React, { memo } from 'react';

import { imageSizeFormat } from '@/utils/data-format';

import {
    getCurrentMusicInfoAction   
} from '@/components/player-bar/store/actionCreator';
import {SingleRankingWrapper} from './style';

const DZSingleRanking = memo((props) => {
    
    const { info,rankName } = props;
    
    const imageCover = (info && imageSizeFormat(info.coverImgUrl, 90)) || "";
    const tracks = (info && info.tracks) || ["数据更新中"];

    // const playMusic = (id) => {

    //     getCurrentMusicInfoAction(id)
    // }

    return (
        <SingleRankingWrapper>
            <div className="ranking-title">
                <div className="ranking-image">
                    <img src={imageCover} alt="Unknown" />
                    <a href="#/" className="cover">{rankName}</a>
                </div>
                <div>
                    <a href="#/" className="title-name">{rankName}</a>
                    <a href="#/" className="play-icon1 title-icon">play-icon</a>
                    <a href="#/" className="favor-icon1 title-icon">favor-icon</a>
                </div>
                <div className="ranking-list">
                    {tracks.length===1?tracks[0]:
                        tracks.slice(0, 10).map((item, index) => {
                            return (
                                <div key={item.id}
                                    className="ranking-item">
                                    <a href="#/" 
                                       className="text-nowrap" 
                                       title={item.name}>
                                       {item.name}
                                    </a>
                                    <div className="button">
                                        <ul>
                                            <li className="play-icon2"/>
                                            <li className="add-icon"/>
                                            <li className="favor-icon2"/> 
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    } 
                    <a href="#/" className="all">All &#62;</a>
                </div>
            </div>
        </SingleRankingWrapper>
    )
})

export default DZSingleRanking