/**
 * 1.index.js中的根组件挂载方式发生了变化，之前如下：
 * ReactDOM.render(<App />,document.getElementById('root'));
 * 实现方式叫传统方式有所不同，详见https://blog.csdn.net/yehuozhili/article/details/117912552
 * 
 * 2.目录结构
 * 增加自定义目录：assets(静态资源)，common(公共常量和数据)，component(多个页面共享的公共组件)，
 * router(路由)，store(redux中相关代码合并，独立的reducer放在模块中)，service(网络请求)，utils
 * (封装的js工具),views(视图页面)
 * 
 * 3.css的重置
 * 一些标签默认情况是具备自带样式的，导致调试不便(不同浏览器表现不同或自带样式影响调试)。
 * 如何重置：
 * 3.1 使用normalize.css(github下载)进行替代，可以手动下载安装也可以借助npm：
 * npm install --save normalize.css
 * 3.2 在assets/css中创建reset.css,并在该文件中@import导入normalize.css
 * 3.3 在index.js中导入reset.css，对全局样式进行重置
 * 
 * 4.配置别名与主题等高级特性
 * 4.1 项目中配置别名与主题等高级特性的修改是需要修改创建该项目的脚手架的默认配置的。脚手架是基于
 * webpack对配置信息进行处理和打包的，且这些配置信息默认是隐藏的
 * 4.2 可以使用npm run eject命令将所有的配置信息弹出再对相关信息进行修改，但注意该配置信息通过此
 * 种方式暴露后无法再次隐藏，具有较大的隐患。因此，开发中并不建议直接修改CRA的配置信息
 * 4.3 借助craco(不支持react-scripts 5.x)
 * 4.3.1 卸载react-scripts 5.0.1： npm uninstall react-scripts
 * 4.3.2 安装react-scripts 4.0.3： npm i react-scripts@4.0.3
 * 4.3.3 安装craco：npm i @craco/craco
 * 4.3.4 使用craco替换package.json中scripts中的react-scripts，除了eject；之后再使用npm start
 * 命令时，实际上执行的就是craco start命令。该命令比原先的命令会多执行一步操作，就是读取根目录
 * 下的配置文件，通常命名为craco.config.js。craco在执行start命令前会将读取的配置文件内容与原有
 * 的默认配置内容进行合并。
 * 4.3.5 配置craco.config.js文件：使用module.exports = {内容} 导出关于webpack的一些配置
 * 
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/css/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
