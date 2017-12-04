import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Matched } from './Matched';
import {
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { NotMatched } from './NotMatched';

interface Props {
}

interface State {
}

export default class NotFound extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>NotFound</h1>

        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/from-match`}>will match and redirect</Link></li>
          <li><Link to={`${this.props.match.url}/to-match`}>will match</Link></li>
          <li><Link to={`${this.props.match.url}/will-not-match`}>will not match</Link></li>
          <li><Link to={`${this.props.match.url}/will-not-match-either`}>will not match either</Link></li>
        </ol>

        <Switch>
          <Route
            exact={true}
            path={`${this.props.match.url}/`}
            render={() => (<div>default</div>)}
          />
          <Redirect
            from={`${this.props.match.url}/from-match`}
            to={`${this.props.match.url}/to-match`}
          />
          <Route
            exact={true}
            path={`${this.props.match.url}/to-match`}
            component={Matched}
          />
          <Route
            component={NotMatched}
          />
        </Switch>
      </div>
    );
  }
}