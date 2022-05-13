import React, { memo } from 'react';

import {
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style';

import { 
  leftFooterContent,
  rightFooterContent,
  company
} from '@/common/local-data';



const DZAppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        <div className="wrap-v2 content">
          <FooterLeft className="footer-left">
            <div className="declaim">
              {
                leftFooterContent.map((item,index)=>{
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
          </FooterLeft>
          <FooterRight className="footer-right">
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
          </FooterRight>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default DZAppFooter