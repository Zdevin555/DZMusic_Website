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
 * 3.redux hook
 * 3.1组件和redux进行关联，其实主要就进行两项操作：获取数据(state)和进行
 *    操作(派发action)
 *    3.1.1 派发操作：
 *    不再需要mapDispatchToProps将dispatch进行传递，而是通过useDispatch
 *    直接获取dispatch对象，该hook来自于react-redux
 *    3.1.2 获取数据
 *    不再需要mapStateToProps，使用useSelector。该函数参数有两个，其一是
 *    回调函数，接收state为入参，返回的内容会作为useSelector的返回值传递。
 *    因此，可以直接返回要获取的数据对象。其二是shallowEqual，用于指定是
 *    否进行浅层比较，默认非浅层，因此会造成性能浪费，所以shallowEqual需
 *    要设定
 * 
 * 4.immutableJS
 *    4.1 reducer执行函数功能后返回的新对象，由于可能只是修改了一个数据
 * 而致使所有内容进行浅拷贝是会降低性能的
 *    4.2 immutable对象的特点是只要修改了immutable对象，就会返回一个新
 * 对象，而旧对象不发生改变。同时，返回的新对象的方式采取了新算法（结构共享
 * ）反而节省了内存，性能更好。
 *    4.3 immutable对象常见API
 *      JS对象转成Immutable对象：map（内部的复杂类型不再转成immutable对象）
 *      JS数组转成Immutable对象：list；
 *      深层转换：fromJS（内部的复杂类型也都转成immutable对象）；
 *      Immutable对象转成JS对象：toJS；
 *      修改数据：set
 *      获取数据：get
 *      获取迭代(多层内的)数据：getIn(["外层"],["内层"])
 *    4.4 immutable对象在项目中的运用主要是结合redux(主要的数据改变之处)
 *      其一：所有的reducer中管理的state内容都转换成immutable对象，修改数
 *      据使用set方法；
 *      其二：使用redux-immutable中的combineRedeucers,因为总store中合并后
 *      的reducer也需要在每次修改后返回一个新对象，因此也要使用immutable
 *    4.5 使用：
 *    4.5.1 安装immutableJS和redux-immutable：npm i immutable redux-immutable;
 *    4.5.2 模块化导入后可以直接使用，比如导入Map，则可直接用Map对state进
 * 行包裹
 *    4.5.3 组件的reducer中修改数据需要使用state.set(“xx”，action.xx)
 *    4.5.4 在组件中取数据时，也要改变方式。因为state中的recommendation
 * 内的state已经是immutable对象了
 *    4.5.5 根路径下store的reducer文件内涉及到子reducer的合并，需要借助
 * redux-immutable中的combineRedeucers进行
 *    
 * 5. recommendation中的子组件之轮播图
 * 5.1 代码组织方式：
 *    recommendation下创建文件夹subCpnts用于存放其下所有子组件
 * 5.2 topBanner
 *    5.2.1 内建index和style
 *    5.2.2 关于轮播图数据的请求从recommendation移动到topBanner下，
 *    5.2.3 轮播图功能的组件需要导入antd中的carousel；并使用其下的autoplay，
 *          effect，beforeChange等属性，以及next和prev方法
 *    5.2.4 css布局中，注意flex的用法以及bannerControl绝对定位的使用
 *    5.2.5 bannerControl组件的点击事件通过ref传递给carousel组件
 *    5.2.6 在设置轮播图背景时，需要根据当前的banner设置对应的图片作为背景
 *          a. 这需要将当前的图片url传递给对应组件的styled模板块，并将其设
 *          置为background-image。此处使用了styled-component提供的props
 *          传递background-image:url(${props => props.bgImage})
 *          b. 通过监听轮播图切换实现不同的图片对应不同的背景。此处需要借助
 *          carousel组件的beforeChange属性，其属性值是一个回调函数。该回
 *          调函数会在图片切换前回调，并自动接收当前图片id与切换到的图片id
 *          作为参数。
 *              b-1. beforeChange对应的回调函数相当于是定义在组件内传递给
 *              子组件供其调用的，故该回调函数需使用useCallback或useMemo
 *              包裹，避免性能浪费
 *              b-2. beforeChange属性对应的回调函数有from和to两个入参，通
 *              过测试console.log(to)可知，to参数就是下一张轮播图的索引。
 *              b-3.如何通过回调函数取得索引值取到其对应的图片？这就需要该
 *              函数式组件具备一个记录当前显示图片索引值的state。这个state
 *              只是该组件使用，因此不需要redux，直接使用useState即可，如
 *              const [currentIndex, setCurrentIndex] = useState(0);
 *              此时，在beforeChange的回调中就可以使用setCurrentIndex(to)
 *              更新当前图片index，并进行重新渲染。到这时，就可以通过以下
 *              获取当前的图片topBanners[currentIndex].imageUrl
 *              b-4. 但直接将bgImage=topBanners[currentIndex].imageUrl存
 *              在问题，因为在最开始还没有请求数据过来时，topBanners数组是
 *              空的，那么topBanners[0]取到的就是undefined，再调用imageUrl
 *              就会报错。故可用&&改写。&&左边是topBanners[currentIndex]，
 *              若是undefined就是直接返回bgImage为undefined，在react中，
 *              对bgImage={undefined}是不会报错的，只是当做没有该属性;当不
 *              是undefined，就以&&右边的内容(topBanners[currentIndex].
 *              imageUrl)为最终结果 
 * 
 * 
 */
import React, { memo } from 'react';

import DZHitBanner from './subCpnts/hit-banner';
import DZBigHit from './subCpnts/big-hit';
import DZHitAlbum from './subCpnts/hit-album';
import DZHitRanking from './subCpnts/hit-ranking';
import {
  HitWrapper,
  HitTopics,
  LeftHitTopics,
  RightHitTopics
} from './style';
// import {shallowEqual, useDispatch, useSelector} from 'react-redux';

// import { getTopBannerAction } from './store/actionCreator';

function DZHit(){

  // const {topBanners} = useSelector(state => ({
  //   // topBanners:state.recommendation.topBanners
  //   //当子组件使用immutable后，如下获取数据
  //   //topBanners:state.recommendation.get("topBanners")
  //   //当combineReducer也使用immutable后，则为如下
  //   //topBanners:state.get("recommendation").get("topBanners")
  //   //使用getIn对上面的多层获取进行简化
  //   topBanners:state.getIn(["recommendation","topBanners"])
  // }),shallowEqual);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTopBannerAction())
  //   //此处依赖不需要放入getTopBannerAction，因为它不会引起组件重新渲染
  //   //因此无论怎么改动也没有意义。[]内放都是发生改变致使组件会发
  //   //生重新渲染的内容
  // }, [dispatch])
  

  return (
    <HitWrapper>
      <DZHitBanner/>
      <HitTopics className='wrap-v2'>
        <LeftHitTopics className="left">
          <DZBigHit/>
          <DZHitAlbum/>
          <DZHitRanking/>
        </LeftHitTopics>
        <RightHitTopics>

        </RightHitTopics>
      </HitTopics>
    </HitWrapper>
  )
}

export default memo(DZHit);