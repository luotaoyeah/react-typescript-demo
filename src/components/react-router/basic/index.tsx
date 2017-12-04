import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Link,
  Route
} from 'react-router-dom';

import { Child } from './Child';

interface Props {
}

interface State {
}

export default class Basic extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/aaaa`}>AAAA</Link></li>
          <li><Link to={`${this.props.match.url}/bbbb`}>BBBB</Link></li>
        </ol>
        <Route
          path={`${this.props.match.url}/:path`}
          component={Child}
        />
        <Route
          path={`${this.props.match.url}`}
          exact={true}
          render={
            () => (<div>Basic 主页，请点击二级连接进入子页面</div>)
          }
        />
      </div>
    );
  }
}