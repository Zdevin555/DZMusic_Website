import React, { memo } from 'react'

import DZHitHeader from '../hit-header'
import {
  HitRankingWrapper
} from './style'

const DZHitRanking = memo(() => {
  return (
    <HitRankingWrapper>
      <div className="header">
        <DZHitHeader title="Ranking" />
      </div>
    </HitRankingWrapper>

  )
})

export default DZHitRanking