/*
 * API
 *     <Route>
 */

import React from 'react';
import { Button, Divider } from 'antd';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

function A(props: any) {
  return <Button>A</Button>;
}

function B(props: any) {
  return <Button>B</Button>;
}

/**  */
class ApiRoute extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/a'}>A</Link>
          </li>
          <li>
            <Link to={'/b'}>B</Link>
          </li>
        </ul>
        <Divider />
        {/*
         * 当前地址（window.location.pathname）跟 <Route> 的 path 属性匹配时，
         * 对应的组件就会被渲染；
         */}
        {/*
         * 有三种方式用来指定 <Route> 对应的组件：
         *     component
         *     render
         *     children
         * 一般情况下，使用 component，且无论使用哪种方式，
         * 都会被传递一个路由参数（类型为 RouteComponentProps 的对象）；
         */}
        <Route path={'/a'} component={A} />
        <Route path={'/b'} component={B} />
      </div>
    );
  }
}

export { ApiRoute };
