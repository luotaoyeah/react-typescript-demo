/*
 * Examples: Basic
 */

import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import { Alert, Divider } from 'antd';

const Home = () => {
  return <Alert message={'HOME'} />;
};

const About = () => {
  return <Alert message={'ABOUT'} />;
};

class Topics extends React.Component<{} & RouteComponentProps<any>> {
  public render(): React.ReactNode {
    return (
      <ul>
        <li>
          <Link to={this.props.match.url + '/a'}>TOPIC A</Link>
        </li>
        <li>
          <Link to={this.props.match.url + '/b'}>TOPIC B</Link>
        </li>
        <li>
          <Link to={this.props.match.url + '/c'}>TOPIC C</Link>
        </li>
      </ul>
    );
  }
}

interface ITopicParam {
  topicId: string;
}

class Topic extends React.Component<{} & RouteComponentProps<ITopicParam>> {
  public render(): React.ReactNode {
    return <Alert message={this.props.match.params.topicId} />;
  }
}

/**  */
class C0101 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/topics'}>topics</Link>
          </li>
        </ul>
        <Divider />
        <Route exact={true} path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route exact={true} path={'/topics'} component={Topics} />
        <Route path={'/topics/:topicId'} component={Topic} />
      </div>
    );
  }
}

export { C0101 };
