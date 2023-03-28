import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


import DZHitHeader from '../hit-header';
import { getHitRankingsAction } from '../../store/actionCreator';
import DZSingleRanking from './rankingCpnts';
import {
  HitRankingWrapper
} from './style';

const DZHitRanking = memo(() => {

  const dispatch = useDispatch();
  const { hitUpsurgeRanking, hitFreshRanking, hitOriginalRanking} = useSelector(
    state => ({
      hitUpsurgeRanking: state.getIn(["hit", "hitUpsurgeRanking"]),
      hitFreshRanking: state.getIn(["hit", "hitFreshRanking"]),
      hitOriginalRanking: state.getIn(["hit", "hitOriginalRanking"])
    }), shallowEqual);

  useEffect(() => {
    dispatch(getHitRankingsAction(16));
    dispatch(getHitRankingsAction(17));
    dispatch(getHitRankingsAction(12));
  }, [dispatch])

  return (
    <HitRankingWrapper >
      <div className="header">
        <DZHitHeader title="Ranking" />
      </div>
      <div className="ranking">
        <DZSingleRanking info={hitUpsurgeRanking}
                         rankName={"Upsurge"}/>
        <DZSingleRanking info={hitFreshRanking} 
                         rankName={"Fresh"}/>
        <DZSingleRanking info={hitOriginalRanking} 
                         rankName={"Original"}/>
      </div>
    </HitRankingWrapper>
  )
})

export default DZHitRanking