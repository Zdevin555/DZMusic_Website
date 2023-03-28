import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import {
  HitHeaderWrapper
} from './style'

const DZHitHeader = memo((props) => {
  const {title,keywords=[]} = props;
  return (
    <HitHeaderWrapper>
      <div className="header-left">
        <i className="header-left-icon sprite_02"/>
        <Link to="#/" className="header-title">{title}</Link>
        <div className="keywords">
          {
            keywords.map((item,index)=>{
              return (
                <div key={item} className="item">
                  <Link to="#/">{item}</Link>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="header-right">
        <Link to="#/" className="header-tip">more</Link>
        <i className="header-right-icon sprite_02"/>
      </div>
    </HitHeaderWrapper>
  )
})

export default DZHitHeader