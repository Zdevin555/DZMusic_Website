import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  HeaderWrapper,
  HeaderRight,
  HeaderLeft
} from './style';

import { headerBanners } from '@/common/local-data';


const DZAppHeader = memo(() => {

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">DZ Music</a>
          <div className="select-list">
            {
              headerBanners.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    <NavLink to={item.link}>
                      {item.title}
                      <i className="sprite_01 icon"></i>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="Music/Video/Radio/User"
            prefix={<SearchOutlined />}
            className="search"
          />
          <div className="center">
            <NavLink to="/">Creator Center</NavLink>
          </div>
          <div className="login">
            <NavLink to="/">Sign in</NavLink>
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default DZAppHeader