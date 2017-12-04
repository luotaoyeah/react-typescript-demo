import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Link,
  Route
} from 'react-router-dom';
import { UserInfo } from './UserInfo';
import { Statistic } from './Statistic';
import {
  Col,
  Row
} from 'antd';

interface Props {
}

interface State {
}

/**
 * multiple Routes with the same path
 */
export default class Sidebar extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>Sidebar</h1>

        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/user`}>user</Link></li>
          <li><Link to={`${this.props.match.url}/statistic`}>statistic</Link></li>
        </ol>

        <Row gutter={10}>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/user`}
              component={UserInfo}
            />
          </Col>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/user`}
              component={UserInfo}
            />
          </Col>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/user`}
              component={UserInfo}
            />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/statistic`}
              component={Statistic}
            />
          </Col>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/statistic`}
              component={Statistic}
            />
          </Col>
          <Col span={8}>
            <Route
              path={`${this.props.match.url}/statistic`}
              component={Statistic}
            />
          </Col>
        </Row>
      </div>
    );
  }
}