/*
 * Examples: URL Parameters
 */

import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import { Alert, Divider } from 'antd';

const C = ({ match }: RouteComponentProps<{ id: string }>) => <Alert message={match.params.id.toUpperCase()} />;

const D = ({ match }: RouteComponentProps<{ id: string }>) => (
  <Alert type="error" message={match.params.id.toUpperCase()} />
);

/**  */
function C0201(): React.ReactNode {
  return (
    <div>
      <ul>
        <li>
          <Link to="/a">A</Link>
        </li>
        <li>
          <Link to="/b">B</Link>
        </li>
        <li>
          <Link to="/c">C</Link>
        </li>
      </ul>
      <Divider />
      <Route path="/:id" exact render={C} />
      {/*
       * 可以通过正则表达式，指定参数的匹配规则；
       */}
      <Route path="/:id([ac])" exact render={D} />
    </div>
  );
}

export { C0201 };
