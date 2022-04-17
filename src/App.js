/**
 * 1.文件导入规范
 *  1.1第三方库放在最上面导入
 *  1.2中间导入工具类或是功能性的库或文件，如网络请求等
 *  1.3下层是导入的组件
 * 
 * 2.多页面公用的不变的独立组件放在components文件夹中。在其中创建组建app-footer和
 *  app-header，并使用组件中的index.js进行导出
 * 
 * 3.规划视图页面
 * 
 * 4.使用路由切换组件需导入react-router-dom，并使用react-router-config对route进
 * 行统一管理。其配置routes的管理文件放在router文件夹中，使用index.js导出。使用时
 * 通过导入react-router-config导入renderRoutes函数，放置在视图显示的位置并将配置
 * 文件作为入参。注意，react-router-config不支持react-router v6版本
 * 
 * 
 */

import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';

import DZAppFooter from 'components/app-footer'
import DZAppHeader from 'components/app-header'



const App = memo(() => {
  return (
    <HashRouter>
      <DZAppHeader />
      {renderRoutes(routes)}
      <DZAppFooter />
    </HashRouter>
  )
})

export default App