import React, { memo } from 'react';

import {
  DZFooterWrapper,
  DZFooterLeft,
  DZFooterRight
} from './style';

import { 
  leftFooterBanners,
  rightFooterContent,
  company
} from '@/common/local-data';



const DZAppFooter = memo(() => {
  return (
    <DZFooterWrapper>
      <div className="footer-top">
        <div className="wrap-v2 content">
          <DZFooterLeft className="footer-left">
            <div className="declaim">
              {
                leftFooterBanners.map((item,index)=>{
                  return (
                    <div key={item.title} className="item">
                      <a href={item.link}>{item.title}</a>
                      <span className="line">|</span>
                    </div>
                  )
                })
              }
            </div>
            <p>{company}</p>
          </DZFooterLeft>
          <DZFooterRight className="footer-right">
            {rightFooterContent.map((item,index)=>{
              return (
                  <div key={item.title} className="item">
                      <a href={item.link} className="sprite-footer-02 link">
                        {item.title}
                      </a>
                      <i className="icon sprite-footer-01"></i>
                  </div>
              )
            })}
          </DZFooterRight>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </DZFooterWrapper>
  )
})

export default DZAppFooter