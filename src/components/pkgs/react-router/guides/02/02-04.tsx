/*
 * Basic Components: Navigation
 */

import React from 'react';
import { Alert, Button, Divider } from 'antd';
// eslint-disable-next-line object-curly-newline
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';

/*
 * 导航组件有三个：
 *     <Link>
 *     <NavLink>
 *     <Redirect>
 */

const A = () => <Alert message="A" />;
const B = () => (
  <>
    <Alert message="B" />
    {/*
     * <Redirect> 用于重定向，
     * 即当它渲染时，会自动重定向到 to 属性对应的地址；
     */}
    <Redirect to="/a?name=tom" />
  </>
);

/**  */
function C0204(): React.ReactNode {
  return (
    <div>
      <Button>
        {/*
         * <Link> 会被渲染为 <a> 标签；
         */}
        <Link to="/a?name=luotao">a</Link>
      </Button>
      <Button>
        {/*
         * <NavLink> 跟 <Link> 类似，
         * 区别在于，当 to 属性跟当前的 pathname 匹配时，
         * <a> 标签上会被添加一个样式类，该样式类可以通过 activeClassName 属性指定；
         */}
        <NavLink to="/a" activeClassName="ant-btn-primary">
          a
        </NavLink>
      </Button>
      <Button>
        <Link to="/b">b</Link>
      </Button>
      <Divider />
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
      </Switch>
    </div>
  );
}

export { C0204 };
