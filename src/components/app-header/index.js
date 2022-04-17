import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const DZAppHeader = memo(() => {
  return (
    <div>
       <NavLink to="/">发现音乐</NavLink>
       <NavLink to="/mine">我的音乐</NavLink>
       <NavLink to="/friends">关注好友</NavLink>
       <NavLink to="/downloads">下载应用</NavLink>
    </div>
  )
})

export default DZAppHeader