import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '@/router';
import store from '@/store/index.js';

import DZAppFooter from 'components/app-footer'
import DZAppHeader from 'components/app-header'
import DZPlayerBar from 'components/player-bar'



const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <DZAppHeader />
        {renderRoutes(routes)}
        <DZAppFooter />
        <DZPlayerBar/>
      </HashRouter>
    </Provider>
  )
})

export default App