import React from 'react';
import {
  Link,
  Route,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import { UserInfo } from './UserInfo';
import { About } from './About';

interface Props {
}

interface State {
}

export default class AmbiguousMatch extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>AmbiguousMatch</h1>

        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/about`}>about</Link></li>
          <li><Link to={`${this.props.match.url}/foo`}>foo</Link></li>
          <li><Link to={`${this.props.match.url}/bar`}>bar</Link></li>
        </ol>

        {/*
          Sometimes you want to have a whitelist of static paths
          like '/about' and '/company' but also allow for dynamic
          patterns like '/:user'. The problem is that '/about'
          is ambiguous and will match both '/about' and '/:user'.
          Most routers have an algorithm to decide for you what
          it will match since they only allow you to match one
          'route'. React Router lets you match in multiple places
          on purpose (sidebars, breadcrumbs, etc). So, when you
          want to clear up any ambiguous matching, and not match
          '/about' to '/:user', just wrap your <Route>s in a
          <Switch>. It will render the first one that matches.
        */}
        <Switch>
          <Route
            path={`${this.props.match.url}/about`}
            component={About}
          />
          <Route
            path={`${this.props.match.url}/:user`}
            component={UserInfo}
          />
        </Switch>

      </div>
    );
  }
}