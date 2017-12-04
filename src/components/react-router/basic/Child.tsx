import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {
}

interface State {
}

/**
 * 路由参数
 */
interface RouteParam {
  path: string;
  age?: number;
}

export class Child extends React.Component<Props & RouteComponentProps<RouteParam>, State> {
  render() {
    return (
      <div>
        isExact:{String(this.props.match.isExact)}
        <br/>
        path:{this.props.match.path}
        <br/>
        url:{this.props.match.url}
        <br/>
        params:{JSON.stringify(this.props.match.params)}
        <br/>
      </div>
    );
  }
}