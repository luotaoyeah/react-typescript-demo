/*
 * Basic Components: Route Matching
 */

import React from 'react';
import { Alert, Button, Divider } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';

/*
 * 路由匹配组件有两个：<Route> 和 <Switch>，
 * 路由匹配的规则是：
 *     匹配 Route 组件的 path 属性和当前 url 的 Location.pathname 属性是否匹配；
 * 如果匹配，则渲染 component 属性对应的组件，
 * 否则不会渲染；
 */

const A = () => {
  return <Alert message={'A'} />;
};
const B = () => {
  return <Alert message={'B'} />;
};
const NotFound = () => {
  return <Alert message={'404'} type={'error'} />;
};

/**  */
class C0202 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <p>
          <Button>
            <Link to={'/a'}>a</Link>
          </Button>
          <Button>
            <Link to={'/b'}>b</Link>
          </Button>
          <Button>
            <Link to={'/c'}>c</Link>
          </Button>
        </p>
        <Divider />
        {/*
         * 将多个 <Route> 放在 <Switch> 中间，
         * 则只会渲染第一个匹配的 <Route>；
         */}
        <Switch>
          <Route path={'/a'} component={A} />
          <Route path={'/b'} component={B} />
          {/*
           * 如果 <Route> 没有指定 path 属性，
           * 则它的组件会始终渲染；
           *
           * 如果它位于 <Switch> 中间，
           * 则当前面的 <Route> 都没有匹配成功时，
           * 该 <Route> 会被渲染；
           */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export { C0202 };
