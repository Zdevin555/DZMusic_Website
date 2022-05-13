import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DZSongCover from '../../../../../../components/song-cover';

import { getBigHitsAction } from '../../store/actionCreator';
import DZHitHeader from '../hit-header';
import {
    BigHitWrapper
} from './style';

const DZBigHit = memo(() => {

    const dispatch = useDispatch();
    const { bigHits } = useSelector(state=>({
        bigHits:state.getIn(["hit","bigHits"])
    }),shallowEqual);

    useEffect(() => {
      dispatch(getBigHitsAction(8))
    }, [dispatch])
    
    return (
        <BigHitWrapper>
            <div className="hit-header">
                <DZHitHeader title={"Big Hits"} keywords={["Chinese","Pop","Rock","Folk","Electronic"]} />
            </div>
            <div className='songs'>
            {
                bigHits.map((item,index) =>{
                    return (
                        <div key={item.id} className="songs-item">
                            <DZSongCover playCount={item.playCount} 
                                          picUrl={item.picUrl} 
                                          id={item.id} 
                                          name={item.name}/>
                            <Link to={"/playlist?id="+item.id} className="songs-title ">{item.name}</Link>
                        </div>
                    )
                })
            }
            </div>
        </BigHitWrapper>
    )
})

export default DZBigHit