/**
 * 2.此处的css样式应该是属于组件的，故需要style-component库
 * 2.1 在app-header文件夹中创建style.js文件,安装style-component
 * 库并导入styled到该文件
 * 2.2 将styled文件内容以组件形式导出，导出的是最外层的styled包裹
 * ，这种形式便于管理，避免冲突,这将是以后编写组件style的一种规范
 * 
 * 3.精灵图的使用
 * 3.1 精灵图一般当做背景设置使用
 * 3.2 此处如果使用navlink设置背景需要进行包裹后再设置，而如果使用
 * a标签+锚点会相对简便
 * 
 * 4.header中内容
 * 在common文件夹中创建local-data.js文件，将显示内容设置成数组，遍
 * 历处理
 * 
 * 5.headerLeft的flex布局
 * 5.1 开启flex布局:display:flex;
 * 
 * 6.headerRight借助antd
 * 6.1 安装antd与@ant-design/icons
 * 6.2 导入input组件，为使其生效，需要在reset.css中导入"~antd/dist/antd.css"
 * 
 * 7.关于NavLink的三点
 * 7.1 NavLink被选中时，即url与to属性值匹配时，默认会有active的classname
 * 7.2 Link系的to属性不支持多路径
 * 7.3 to属性与route中的path属性没有必然联系
 * 
 * justify-content: space-between;
 * .text-nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
 * 
 */
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