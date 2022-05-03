import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import {
  HitHeaderWrapper
} from './style'

const DZHitHeader = memo((props) => {
  /**
   * 1.keywords是undefined，调用map会报错，如何解决？
   * 方案一：es6解构语法赋初值
   * const {title,keywords=[]} = props;
   * 方案二：keywords是props传递的属性，使用PropTypes校验(重点)
   *  import PropTypes from "prop-types";
   *  在函数式组件外使用PropTypes：
   *  DZHitThemeHeader.propTypes = {
   *    title：PropTypes.string.isRequired,
   *    keywords:PropTypes.array
   *  }
   *  DZHitThemeHeader.defaultProp = {
   *    keywords:[]
   *  }
   * 
   */
  const {title,keywords=[]} = props;
  return (
    <HitHeaderWrapper>
       {/* 2.抽出公共组件时，需要动态内容可以借助props设置 */}
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