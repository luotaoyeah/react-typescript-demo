/*
 * Examples: Basic
 */

import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import { Alert, Divider } from 'antd';

const Home = () => <Alert message="HOME" />;

const About = () => <Alert message="ABOUT" />;

function Topics(props: {} & RouteComponentProps<any>) {
  const { match } = props;
  return (
    <ul>
      <li>
        <Link to={`${match.url}/a`}>TOPIC A</Link>
      </li>
      <li>
        <Link to={`${match.url}/b`}>TOPIC B</Link>
      </li>
      <li>
        <Link to={`${match.url}/c`}>TOPIC C</Link>
      </li>
    </ul>
  );
}

interface ITopicParam {
  topicId: string;
}

function Topic(props: {} & RouteComponentProps<ITopicParam>) {
  const { match } = props;
  return <Alert message={match.params.topicId} />;
}

/**  */
function C0101(): React.ReactNode {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/topics">topics</Link>
        </li>
      </ul>
      <Divider />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/topics/:topicId" component={Topic} />
    </div>
  );
}

export { C0101 };
