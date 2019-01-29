/*
 * Basic Components: Routers
 */

import * as React from "react";

/*
 * ReactRouter 里面的组件分成三类：
 *     1. 路由组件（router component）；
 *     2. 路由匹配组件（route matching component）；
 *     3. 导航组件（navigation component）；
 */

/*
 * 对于 web 应用，ReactRouter 提供了两个路由组件，BrowserRouter 和 HashRouter，
 * 他们都会创建一个特殊的 history 对象，
 * 一般情况下，当前后台有交互时，使用 BrowserRouter，
 * 当应用是一个静态文件应用时，使用 HashRouter；
 *
 * 一个应用只需要一个路由组件，一般位于应用的最顶层；
 */

/**  */
class C0201 extends React.Component {
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C0201 };
