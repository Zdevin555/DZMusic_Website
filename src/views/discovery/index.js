import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {
  DiscoveryWrapper,
  TopSubMenu
} from './style';

import { discoveryMenu } from '@/common/local-data';

const DZDiscovery = memo((props) => {
  return (
    <DiscoveryWrapper>
      <div className="top">
        <TopSubMenu className="wrap-v1">
          {
            discoveryMenu.map((item, index) => {
              return (
                <div key={item.title} className="listItem">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopSubMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoveryWrapper >
  )
})

export default DZDiscovery