/**
 * 1.项目中引入axios（不熟悉）,进行发送和接受网络请求
 * 1.1 导入封装文件到services
 * 1.2 通过useEffect发送请求
 * 1.3 注意request.js文件中的拦截
 * 1.4 对于发送网络请求：对于可能发送大量的网络请求的模块，通常不
 * 会在发送网络请求时直接使用上面request导出的sxios实例的，而是针
 * 对该模块在services建立单独的文件a.js,其中就是a模块要发送的所有
 * 网络请求，这样当发送网络请求的url更新后便于维护，扩展性强
 * 1.5 这样services中除了拥有可以发送请求的公共组件request.js外，
 * 还包含各个模块对应的文件，用来组织该模块可能用到的url和参数
 * 
 * 2.请求数据的管理redux
 * 2.1 虽然通过axios可以获得请求数据，并通过useState交由组件管理，
 * 但规范要求从服务器返回的所有数据都要交由redux进行管理
 * 2.2 添加redux相关依赖（redux react-redux redux-thunk）
 * 2.3 创建项目store文件夹进行项目管理：
 *     2.3.1 创建index.js，其内创建store（createStore函数）并导出使
 *     用，使用方式就是在在顶层App.js中通过react-redux导入Provider，
 *     使项目的store得以在组件间共享
 *     2.3.2 创建reducer.js，实现reducer的拆分与合并
 * 2.4.针对每一个独立组件创建子store
 *     2.4.1 每个store下辖index,reducer,constant,actionCreator
 *     2.4.2 所有内容统一由子store的index导出供项目store的reducer.js
 *     使用
 * 2.5 在项目store的reducer.js导入子store导出的子reducer，并在导
 * 入时实现重命名以示区分
 * 2.6 actionCreator用于定义该模块需要使用的action函数
 *     2.6.1 此处可以将发送请求的模块内容从service导入，实现请求action
 *     2.6.2 注意：使用thunk的action中必定要存在一个action是具备type属
 *     性的，因为一旦dispatch派发的action不再是函数而是对象时，就会进入
 *     到reducer中修改state，从而实现数据流入到store中的state里
 * 2.7 在对应的模块或指定的组件中调用dispatch和action函数。
 *     2.7.1 在reduxHook之前，需要借助redux中的connect高阶组件实现。其
 *     下的两个参数视为指定组件从store中接收的指定state以及获取dispatch
 *     函数的桥梁。
 *     2.7.2 以recommendation模块为例，在其中获取getTopBannerAction。
 *     这需要在recommendation的index.js中导入connect高阶组件，并配置参
 *     数mapStateToProps和mapDispatchToProps。再使用connect包裹需要增
 *     强的组件
 *     2.7.3 mapStateToProps中参数state是最外层store内合并完成后的state，
 *     不是recommendation模块中reducer的定义的state；
 *     2.7.4 mapStateToProps中接收箭头函数返回的对象是一个函数，该函数需
 *     另行命名，一般为导入的action去掉Action后的名字。该函数对象的返回值
 *     就是dispatch派发对应action的结果。此时,这就实现了将定义action及其
 *     派发过程与对应组件关联
 * 2.8 在对应组件中使用effecthook发送请求
 * 2.9 将请求返回的数据映射到recommendation组件里面(就是在组件里面通过
 * jsx语法进行展示)
 *     2.9.1 之前通过mapStateToProps已经赋予了组件props中一个topBanners
 *     的属性，现在可以通过解构直接使用。
 *     2.9.2 其内的值就是reducer执行后，更新state后保存在里面的值
 *     
 * 
 * 
 * 
 */
import React, { memo, useEffect } from 'react';
import {connect} from 'react-redux';
import { getTopBannerAction } from './store/actionCreator';

function DZRecommendation(props){

  const {getTopBanners,topBanners} = props;
   
  useEffect(() => {
    getTopBanners();
  }, [getTopBanners]);

  return (
    <div>
      DZRecommendation:{topBanners.length}
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners:state.recommendation.topBanners
});

const mapDispatchToProps = dispatch => ({
  getTopBanners:()=>{
    dispatch(getTopBannerAction())
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(memo(DZRecommendation));