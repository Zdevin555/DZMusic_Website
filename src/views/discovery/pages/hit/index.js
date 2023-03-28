import React, { memo } from 'react';

import DZHitBanner from './subCpnts/hit-banner';
import DZBigHit from './subCpnts/big-hit';
import DZHitAlbum from './subCpnts/hit-album';
import DZHitRanking from './subCpnts/hit-ranking';
import {
  HitWrapper,
  HitTopics,
  LeftHitTopics,
  RightHitTopics
} from './style';

function DZHit(){
  return (
    <HitWrapper>
      <DZHitBanner/>
      <HitTopics className='wrap-v2'>
        <LeftHitTopics className="left">
          <DZBigHit/>
          <DZHitAlbum/>
          <DZHitRanking/>
          <div className="hit-footer"/>
        </LeftHitTopics>
        <RightHitTopics>

        </RightHitTopics>
      </HitTopics>
    </HitWrapper>
  )
}

export default memo(DZHit);