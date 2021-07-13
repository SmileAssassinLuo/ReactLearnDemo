// import React  from 'react';
import HomePage from '../homePage/HomePage';
import ScenesPage from '../basic/scenesContent/ScenesPage';
import NoMatch from '../homePage/NoMatch';
//import { Redirect } from 'react-router-dom';//引入浏览器路由,(还有Hash路由)，Route指定组件
// renderRoutes 这个方法只渲染一层路由，如果涉及多层路由，，只需在 父组件中 中再次调用 renderRoutes 即可。
const routes =  [
          {
            path: "/",
            exact: true,
            component: HomePage,
          },
          {
            path: "/home",
            component: HomePage
          }
          ,{
            path: "/scenePage/:sceneDetail",
            component: ScenesPage
          }
          ,{
            path:"*",
            component:NoMatch
          }
        ];
export default routes;

