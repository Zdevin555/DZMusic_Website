import React, { memo } from 'react';

import { discoveryMenu } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {
  DiscoveryWrapper,
  TopSubMenu
} from './style';

const DZDiscovery = memo((props) => {

  const {route} = props;
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
      {renderRoutes(route.routes)}
    </DiscoveryWrapper >
  )
})

export default DZDiscovery