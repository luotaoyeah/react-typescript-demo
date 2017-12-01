import * as React from 'react';
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

export default class UrlParameter extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>Url Parameter</h1>
        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/a`}>A</Link></li>
          <li><Link to={`${this.props.match.url}/b`}>B</Link></li>
        </ol>

        <Route
          exact={true}
          path={`${this.props.match.url}/:id`}
          component={Child}
        /></div>
    );
  }
}